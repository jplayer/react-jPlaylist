import PropTypes from 'prop-types';
import { actions as jPlayerActions } from 'react-jplayer';
import { connect } from 'react-redux';
import { compose, lifecycle as setLifecycle, withHandlers, withContext, withProps } from 'recompose';

import JPlaylist from './jPlaylist';
import { classes } from '../../util/constants';
import { setOption, setPlaylist, next, shuffle } from '../../actions/actions';

const mapStateToProps = ({ jPlayers, jPlaylists }, { id }) => ({
  playNow: jPlaylists[id].playNow,
  shuffled: jPlaylists[id].shuffled,
  loop: jPlaylists[id].loop,
  shuffleOnLoop: jPlaylists[id].shuffleOnLoop,
  focused: jPlayers[id].focused,
  playlist: jPlaylists[id].playlist,
  current: jPlaylists[id].current,
  id,
  states: {
    [classes.states.LOOPED_PLAYLIST]: jPlaylists[id].loop === 'loop-playlist',
    [classes.states.SHUFFLED]: jPlaylists[id].shuffled,
  },
});

const createProps = ({ playlist, current }) => ({
  currentMediaId: playlist.length > 0 ? playlist[current].id : null,
});

const handlers = {
  setLoop: props => () => {
    if (props.loop === 'loop') {
      props.dispatch(jPlayerActions.setOption(props.id, 'loop', true));
    } else {
      props.dispatch(jPlayerActions.setOption(props.id, 'loop', false));
    }
  },
  playNext: props => () => props.dispatch(next(props.id)),
  playMediaNow: props => () => {
    props.dispatch(jPlayerActions.play(props.id));
    props.dispatch(setOption(props.id, 'playNow', false));
  },
  changeMedia: props => () => {
    if (props.playlist.length > 0) {
      props.dispatch(jPlayerActions.setMedia(
        props.id,
        props.playlist[props.current],
      ));
    }
  },
  shufflePlaylistOnLoopPlaylist: props => () => {
    if (props.loop === 'loop-playlist' && props.current === 0 &&
      props.shuffled && props.shuffleOnLoop) {
      props.dispatch(shuffle(props.id, true, true));
    }
  },
  clearMediaWhenPlaylistEmpty: props => () => {
    if (props.playlist.length === 0) {
      props.dispatch(jPlayerActions.clearMedia(props.id));
    }
  },
};

const contextTypes = {
  id: PropTypes.string,
  internalEvents: PropTypes.shape({
    onEnded: PropTypes.func,
  }),
};

const childContext = ({ id, playNext }) => ({
  id,
  internalEvents: {
    onEnded: playNext,
  },
});

const lifecycle = {
  componentDidMount() {
    if (this.props.playlist.length > 0) {
      this.props.dispatch(setPlaylist(this.props.id, this.props.playlist));
    }
  },
  componentDidUpdate(prevProps) {
    if (this.props.currentMediaId !== prevProps.currentMediaId) {
      this.props.changeMedia();
    }

    if (this.props.playlist.length !== prevProps.playlist.length) {
      this.props.clearMediaWhenPlaylistEmpty();
    }

    if (this.props.loop !== prevProps.loop) {
      this.props.setLoop();
    }

    if (this.props.playNow) {
      this.props.playMediaNow();
    }

    if (this.props.currentMediaId !== prevProps.currentMediaId &&
      prevProps.current === prevProps.playlist.length - 1) {
      this.props.shufflePlaylistOnLoopPlaylist();
    }
  },
};

export default compose(
  connect(mapStateToProps),
  withProps(createProps),
  withHandlers(handlers),
  withContext(contextTypes, childContext),
  setLifecycle(lifecycle),
)(JPlaylist);
