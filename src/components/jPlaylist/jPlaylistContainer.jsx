import PropTypes from 'prop-types';
import { actions as jPlayerActions, constants } from 'react-jplayer';
import { connect } from 'react-redux';
import { compose, lifecycle as setLifecycle, withHandlers, withContext } from 'recompose';

import JPlaylist from './jPlaylist';
import { classes } from '../../util/constants';
import { setOption, setPlaylist, next, shuffle } from '../../actions/actions';

const mapStateToProps = ({ jPlayers, jPlaylists }, { id, children, states, keyBindings }) => {
  const current = jPlaylists[id].current;
  const playlist = jPlaylists[id].playlist;
  let currentMediaId;

  if (playlist[current] !== undefined) {
    currentMediaId = playlist[current].id;
  }

  return {
    playNow: jPlaylists[id].playNow,
    shuffled: jPlaylists[id].shuffled,
    loop: jPlaylists[id].loop,
    shuffleOnLoop: jPlaylists[id].shuffleOnLoop,
    focused: jPlayers[id].focused,
    keyBindings,
    currentMediaId,
    playlist,
    current,
    id,
    children,
    states: {
      [classes.states.LOOPED_PLAYLIST]: jPlaylists[id].loop === 'loop-playlist',
      [classes.states.SHUFFLED]: jPlaylists[id].shuffled,
      ...states,
    },
  };
};

const handlers = {
  setLoop: props => () => {
    if (props.loop === 'loop') {
      props.dispatch(jPlayerActions.setOption(props.id, 'loop', true));
    } else {
      props.dispatch(jPlayerActions.setOption(props.id, 'loop', false));
    }
  },
  playNext: props => () => props.dispatch(next(props.id)),
};

const lifecycle = {
  componentDidMount() {
    if (this.props.playlist.length > 0) {
      this.props.dispatch(setPlaylist(this.props.id, this.props.playlist));
    }

    const jPlaylist = document.getElementById(this.props.id);

    this.media = jPlaylist.getElementsByClassName(constants.classes.MEDIA)[0];
    this.media.addEventListener('ended', this.playNext);
  },
  componentDidUpdate(prevProps) {
    if (this.props.playlist.length > 0 &&
      this.props.currentMediaId !== prevProps.currentMediaId) {
      this.props.dispatch(jPlayerActions.setMedia(
        this.props.id,
        this.props.playlist[this.props.current],
      ));
    } else if (this.props.playlist.length === 0 &&
      this.props.playlist.length > prevProps.playlist.length) {
      this.props.dispatch(jPlayerActions.clearMedia(this.props.id));
    }

    if (this.props.loop !== prevProps.loop) {
      this.setLoop();
    }

    if (this.props.playNow) {
      this.props.dispatch(jPlayerActions.play(this.props.id));
      this.props.dispatch(setOption(this.props.id, 'playNow', false));
    }

    if (this.props.currentMediaId !== prevProps.currentMediaId &&
      this.props.loop === 'loop-playlist') {
      // See if we need to shuffle before looping to start, and only shuffle if more than 1 item.
      if (this.props.current === 0 && prevProps.current === prevProps.playlist.length - 1 &&
        this.props.shuffled && this.props.shuffleOnLoop && this.props.playlist.length > 1) {
        // Shuffle and play the media now
        this.props.dispatch(shuffle(this.props.id, true, true));
      }
    }
  },
  componentWillUnmount() {
    this.media.removeEventListener('ended', this.playNext);
  },
};

export default compose(
  withContext({ id: PropTypes.string }, ({ id }) => ({ id })),
  connect(mapStateToProps),
  withHandlers(handlers),
  setLifecycle(lifecycle),
)(JPlaylist);
