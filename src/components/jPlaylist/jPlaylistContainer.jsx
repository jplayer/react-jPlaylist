import React from 'react';
import merge from 'lodash.merge';
import { JPlayer, actions as jPlayerActions } from 'react-jplayer';
import { connectWithId } from 'react-jplayer-utils';
import PropTypes from 'prop-types';

import classes from '../../util/classes';
import getLoopState from '../../util/getLoopState';
import { setOption, next, shuffle } from '../../actions/actions';

const mapStateToProps = ({ jPlaylists }, { id, children, customStates, ...attributes }) => {
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
    keyBindings: jPlaylists[id].keyBindings,
    otherJPlaylists: Object.keys(jPlaylists).filter(key => key !== id),
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

class JPlaylistContainer extends React.Component {
  static get defaultProps() {
    return {
      attributes: null,
      customStates: null,
    };
  }
  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired,
      id: PropTypes.number.isRequired,
      attributes: PropTypes.object,
      children: PropTypes.node.isRequired,
      shuffled: PropTypes.bool.isRequired,
      currentMediaId: PropTypes.number.isRequired,
      customStates: React.PropTypes.object,
      playNow: PropTypes.bool.isRequired,
      loop: PropTypes.string.isRequired,
      shuffleOnLoop: PropTypes.bool.isRequired,
      otherJPlaylists: PropTypes.arrayOf(
        PropTypes.object,
      ).isRequired,
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
    this.props.dispatch(jPlayerActions.setOption(this.props.id, 'keyBindings', merge({
      next: {
        key: 221, // ]
        fn: () => this.next(),
      },
      previous: {
        key: 219, // [
        fn: () => this.previous(),
      },
      shuffle: {
        key: 83, // s
        fn: () => this.shuffle(),
      },
      loop: { // TODO: Might be overwriten if user sets it after has mounted
        key: 76, // l
        fn: () => {
          const loop = getLoopState(this.props.loop);

          this.props.dispatch(setOption(this.props.id, 'loop', loop));
        },
      },
    }, this.props.keyBindings)));

    this.props.dispatch(jPlayerActions.setMedia(this.props.id, this.props.playlist[0]));
  }
  componentDidMount() {
    this.media = document.querySelector(`#${this.props.id} audio`) ||
      document.querySelector(`#${this.props.id} video`);

    this.media.addEventListener('ended', this.playNext);
    this.media.addEventListener('play', this.pauseOthers);
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
    this.media.removeEventListener('play', this.pauseOthers);
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
  pauseOthers = () => {
    this.props.otherJPlaylists.forEach(jPlaylist =>
      this.props.dispatch(jPlayerActions.pause(jPlaylist.id)));
  }
  render() {
    return (
      <JPlayer customStates={this.props.customStates} {...this.props.attributes}>
        {this.props.children}
      </JPlayer>
    );
  }
}

export default connectWithId(mapStateToProps)(JPlaylistContainer);
