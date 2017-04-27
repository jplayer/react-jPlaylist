import React from 'react';
import merge from 'lodash.merge';
import { JPlayer, actions as jPlayerActions } from 'react-jplayer';
import { connectWithId } from 'react-jplayer-utils';
import PropTypes from 'prop-types';

import classes from '../../util/classes';
import getLoopState from '../../util/getLoopState';
import { setOption, select, next, shuffle, setPlaylist } from '../../actions/actions';

const mapStateToProps = ({ jPlaylists }, { id, children, customStates, ...attributes }) => ({
  playNow: jPlaylists[id].playNow,
  shuffled: jPlaylists[id].shuffled,
  loop: jPlaylists[id].loop,
  shuffleOnLoop: jPlaylists[id].shuffleOnLoop,
  current: jPlaylists[id].current,
  playlist: jPlaylists[id].playlist,
  keyBindings: jPlaylists[id].keyBindings,
  otherJPlaylists: Object.keys(jPlaylists).filter(key => key !== id),
  id,
  children,
  attributes,
  customStates: {
    [classes.states.LOOPED_PLAYLIST]: jPlaylists[id].loop === 'loop-playlist',
    [classes.states.SHUFFLED]: jPlaylists[id].shuffled,
    ...customStates,
  },
});

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
    if (this.props.playlist[this.props.current].id !==
        nextProps.playlist[nextProps.current].id) {
      this.props.dispatch(jPlayerActions.setMedia(
        nextProps.id,
        nextProps.playlist[nextProps.current],
      ));
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.loop !== prevProps.loop) {
      this.setLoop();
    }

    this.props.playlist.forEach((media, index) => {
      if (media.isRemoving) {
        this.remove(index, this.props.current);
      }
    });

    if (this.props.playNow) {
      this.props.dispatch(jPlayerActions.play(this.props.id));
      this.props.dispatch(setOption(this.props.id, 'playNow', false));
    }

    if (this.props.playlist[this.props.current].id !==
      prevProps.playlist[prevProps.current].id) {
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
  remove = (index) => {
    const playlist = [...this.props.playlist];
    playlist.splice(index, 1);
    this.props.dispatch(setPlaylist(this.props.id, playlist));

    if (playlist.length) {
      let current = this.props.current;

      if (index === this.props.current) {
        // To cope when last element being selected when it was removed
        current = (index < playlist.length) ? this.props.current
          : playlist.length - 1;
      } else if (index < this.props.current) {
        current -= 1;
      }
      this.props.dispatch(select(this.props.id, current));
    } else {
      this.props.dispatch(setOption(this.props.id, 'shuffled', false));
    }
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
