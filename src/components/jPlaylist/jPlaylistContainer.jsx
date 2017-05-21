import React from 'react';
import merge from 'lodash.merge';
import JPlayer, { actions as jPlayerActions } from 'react-jplayer';
import { connectWithId } from 'react-jplayer-utils';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';
import getLoopState from '../../util/getLoopState';
import { setOption, setPlaylist, next, previous, shuffle } from '../../actions/actions';

const mapStateToProps = ({ jPlayers, jPlaylists }, { id, children, customStates,
keyBindings, ...attributes }) => {
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
    attributes,
    customStates: {
      [classes.states.LOOPED_PLAYLIST]: jPlaylists[id].loop === 'loop-playlist',
      [classes.states.SHUFFLED]: jPlaylists[id].shuffled,
      ...customStates,
    },
  };
};

const mergeProps = (stateProps, { dispatch }) => ({
  ...stateProps,
  dispatch,
  keyBindings: merge({
    next: {
      key: 221, // ]
      fn: () => dispatch(next(stateProps.id)),
    },
    previous: {
      key: 219, // [
      fn: () => dispatch(previous(stateProps.id)),
    },
    shuffle: {
      key: 83, // s
      fn: () => dispatch(shuffle(stateProps.id, undefined, true)),
    },
    loop: {
      key: 76, // l
      fn: () => {
        const loop = getLoopState(stateProps.loop);

        dispatch(setOption(stateProps.id, 'loop', loop));
      },
    },
  }, stateProps.keyBindings),
});

class JPlaylistContainer extends React.Component {
  static get defaultProps() {
    return {
      attributes: null,
      customStates: null,
      playNow: false,
      currentMediaId: null,
    };
  }
  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired,
      id: PropTypes.string.isRequired,
      attributes: PropTypes.object,
      children: PropTypes.node.isRequired,
      shuffled: PropTypes.bool.isRequired,
      currentMediaId: PropTypes.string,
      customStates: PropTypes.object,
      playNow: PropTypes.bool,
      loop: PropTypes.string.isRequired,
      shuffleOnLoop: PropTypes.bool.isRequired,
      current: PropTypes.number.isRequired,
      playlist: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            artist: PropTypes.string,
            mp3: PropTypes.string,
            poster: PropTypes.string,
            free: PropTypes.bool,
          }),
      ).isRequired,
      keyBindings: PropTypes.object.isRequired,
    };
  }
  componentWillMount() {
    this.props.dispatch(setPlaylist(this.props.id, this.props.playlist));
    this.props.dispatch(jPlayerActions.setMedia(this.props.id, this.props.playlist[0]));
  }
  componentDidMount() {
    this.media = document.querySelector(`#${this.props.id} audio`) ||
      document.querySelector(`#${this.props.id} video`);

    this.media.addEventListener('ended', this.playNext);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.playlist.length > 0 &&
        this.props.currentMediaId !== nextProps.currentMediaId) {
      this.props.dispatch(jPlayerActions.setMedia(
        nextProps.id,
        nextProps.playlist[nextProps.current],
      ));
    } else if (nextProps.playlist.length === 0 &&
        this.props.playlist.length > nextProps.playlist.length) {
      this.props.dispatch(jPlayerActions.clearMedia(nextProps.id));
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.loop !== prevProps.loop) {
      this.setLoop();
    }

    if (this.props.playNow) {
      this.props.dispatch(jPlayerActions.play(this.props.id));
      this.props.dispatch(setOption(this.props.id, 'playNow', false));
    }

    if (this.props.currentMediaId !== prevProps.currentMediaId) {
      this.handlePlaylistLooped(prevProps);
    }
  }
  componentWillUnmount() {
    this.media.removeEventListener('ended', this.playNext);
  }
  setLoop = () => {
    if (this.props.loop === 'loop') {
      this.props.dispatch(jPlayerActions.setOption(this.props.id, 'loop', true));
    } else {
      this.props.dispatch(jPlayerActions.setOption(this.props.id, 'loop', false));
    }
  }
  handlePlaylistLooped = (prevProps) => {
    if (this.props.loop === 'loop-playlist') {
      // See if we need to shuffle before looping to start, and only shuffle if more than 1 item.
      if (this.props.current === 0 && prevProps.current === prevProps.playlist.length - 1 &&
          this.props.shuffled && this.props.shuffleOnLoop && this.props.playlist.length > 1) {
        // Shuffle and play the media now
        this.props.dispatch(shuffle(this.props.id, true, true));
      }
    }
  }
  playNext = () => this.props.dispatch(next(this.props.id))
  render() {
    return (
      <JPlayer
        customStates={this.props.customStates} keyBindings={this.props.keyBindings}
        {...this.props.attributes}
      >
        {this.props.children}
      </JPlayer>
    );
  }
}

export default connectWithId(mapStateToProps, null, mergeProps)(JPlaylistContainer);
