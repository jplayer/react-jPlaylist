import React from 'react';
import merge from 'lodash.merge';
import { connect } from 'react-redux';
import { formats, actions as jPlayerActions } from 'react-jplayer';

import Playlist from '../Playlist/playlistContainer';
import { setOption, select, play, pause, shuffle, setPlaylist } from '../../actions/actions';

const mapStateToProps = ({ jPlaylists }, { id }) => ({
  index: jPlaylists[id].index,
  play: jPlaylists[id].play,
  playNow: jPlaylists[id].playNow,
  autoBlur: jPlaylists[id].autoBlur,
  paused: jPlaylists[id].paused,
  shuffled: jPlaylists[id].shuffled,
  loop: jPlaylists[id].loop,
  shuffleOnLoop: jPlaylists[id].shuffleOnLoop,
  loopOnPrevious: jPlaylists[id].loopOnPrevious,
  autoPlay: jPlaylists[id].autoPlay,
  current: jPlaylists[id].current,
  playlist: jPlaylists[id].playlist,
  keyBindings: jPlaylists[id].keyBindings,
  itemClass: jPlaylists[id].itemClass,
  freeItemClass: jPlaylists[id].freeItemClass,
  removeItemClass: jPlaylists[id].removeItemClass,
  freeGroupClass: jPlaylists[id].freeGroupClass,
  jPlaylists,
  id,
});

class JPlaylistContainer extends React.Component {
  static get defaultProps() {
    return {
      itemClass: 'jp-playlist-item',
      freeItemClass: 'jp-playlist-item-free',
      removeItemClass: 'jp-playlist-item-remove',
      freeGroupClass: 'jp-free-media',
    };
  }
  static get propTypes() {
    return {
      dispatch: React.PropTypes.func.isRequired,
      id: React.PropTypes.number.isRequired,
      index: React.PropTypes.number.isRequired,
      play: React.PropTypes.bool.isRequired,
      playNow: React.PropTypes.bool.isRequired,
      autoBlur: React.PropTypes.bool.isRequired,
      paused: React.PropTypes.bool.isRequired,
      shuffled: React.PropTypes.bool.isRequired,
      loop: React.PropTypes.string.isRequired,
      shuffleOnLoop: React.PropTypes.bool.isRequired,
      loopOnPrevious: React.PropTypes.bool.isRequired,
      autoPlay: React.PropTypes.bool.isRequired,
      jPlaylists: React.PropTypes.arrayOf(
        React.PropTypes.object,
      ).isRequired,
      current: React.PropTypes.number.isRequired,
      playlist: React.PropTypes.arrayOf(
          React.PropTypes.shape({
            title: React.PropTypes.string,
            artist: React.PropTypes.string,
            mp3: React.PropTypes.string,
            poster: React.PropTypes.string,
            free: React.PropTypes.bool,
          }),
      ).isRequired,
      keyBindings: React.PropTypes.object.isRequired,
      itemClass: React.PropTypes.string,
      freeItemClass: React.PropTypes.string,
      removeItemClass: React.PropTypes.string,
      freeGroupClass: React.PropTypes.string,
    };
  }
  constructor(props, context) {
    super(props, context);

    this.state = {
      current: 0,
    };
    const jPlayer = document.getElementById(this.props.id);
    this.media = jPlayer.getElementById('audio') || jPlayer.getElementById('video');

    // this.playlistContainerMinHeight = this.playlistItemAnimMinHeight = 0;
    // this.playlistContainerMaxHeight = this.playlistItemAnimMaxHeight = 1;

    this.freeMediaLinkIndex = 0;

    // Put the title in its initial display state
    // if (!this.props.fullScreen) {
    //   this.setState(state => addUniqueToArray(state.detailsClass, constants.classes.HIDDEN));
    // }
  }
  componentWillMount() {
    this.media.addEventListener('ended', this.playNext);
    this.media.addEventListener('play', this.pauseOthers);
    this.props.dispatch(jPlayerActions.setOption(
      this.props.id, 'keyBindings', merge({
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
      }, this.props.keyBindings),
    ));

    // this.props.setOption('onResize', () => {
    // const method = this.props.fullScreen ? this.props.removeFromArrayByValue
    // : this.props.addUniqueToArray;

    //   this.setState(state => method(state.detailsClass, constants.classes.HIDDEN));
    //   this._trigger(this.props.onResize);
    // });
  }
  componentDidMount() {
    this.props.dispatch(setPlaylist(this.props.id, this.props.playlist));
  }
  componentDidUpdate(prevProps, prevState) {
    if (!this.state.shuffling && this.state.shuffling !== prevState.shuffling) {
      if (this.props.playNow || !this.props.paused) {
        this.props.dispatch(play(this.props.id, 0));
      } else {
        this.props.dispatch(select(this.props.id, 0));
      }
    }

    if (this.props.playlist !== prevProps.playlist && !this.state.shuffling) {
      this.autoPlay();
    }

    if (this.props.index !== prevProps.index) {
      if (!this.props.play) {
        this.select();
      } else {
        this.play();
      }
    }

    if (this.props.playlist !== prevProps.playlist) {
      this.initPlaylist();
    }

    if (this.props.shuffled !== prevProps.shuffled) {
      this.shuffle();
    }
  }
  componentWillUnmount() {
    this.media.removeEventListener('ended', this.playNext);
    this.media.removeEventListener('ended', this.pauseOthers);
  }
  getFreeMediaLinks = (media) => {
    const freeMediaLinks = [];
    let firstMediaLinkAdded = true;

    if (!media.free) return freeMediaLinks;

    Object.keys(media).forEach((key) => {
      // Check the property is a media format
      if (formats[key]) {
        const value = media[key];

        if (firstMediaLinkAdded) {
          firstMediaLinkAdded = false;
        } else {
          freeMediaLinks.push(', ');
        }
        freeMediaLinks.push(
          <a
            key={this.freeMediaLinkIndex += 1}
            className={this.props.freeItemClass}
            href={value} tabIndex="-1"
          >
            {key}
          </a>,
        );
      }
    });

    return freeMediaLinks;
  }
  playNext = () => this.next()
  pauseOthers = () => {
    this.props.jPlaylists.forEach((jPlaylist) => {
      if (jPlaylist.id !== this.props.id) {
        this.props.dispatch(pause(jPlaylist.id));
      }
    });
  }
  initPlaylist = () => {
    this.props.dispatch(jPlayerActions.setOption('current', 0));
    this.props.dispatch(jPlayerActions.setOption('shuffled', false));
    this.originalPlaylist = [...this.props.playlist];

    for (let i = 0; i < this.originalPlaylist.length; i += 1) {
      this.originalPlaylist[i].key = i;
      this.originalPlaylist[i].freeMediaLinks = this.getFreeMediaLinks(this.originalPlaylist[i]);
    }

    this.props.dispatch(jPlayerActions.setOption('playlist', this.originalPlaylist));
  }
  add = (media, playNow) => {
    media.freeMediaLinks = this.getFreeMediaLinks(media);
    media.key = maxBy(this.props.playlist, 'key').key + 1;

    this.originalPlaylist.push(media);
    // this.props.addUniqueToArray(constants.keys.PLAYLIST_CLASS, media);

    if (playNow) {
      this.props.dispatch(play(this.props.playlist.length - 1));
    } else if (this.originalPlaylist.length === 1) {
      this.props.dispatch(select(0));
    }
  }
  remove = (index) => {
    if (index === undefined) {
      this.initPlaylist(this.props);
      this.props.dispatch(jPlayerActions.clearMedia);
    } else {
      const playlist = [...this.props.playlist];
      playlist[index].isRemoving = true;

      this.props.dispatch(setOption('playlist', playlist));
    }
    this.setState({ removing: true });
  }
  select = () => {
    if (this.props.index >= 0 && this.props.index < this.props.playlist.length) {
      this.props.dispatch(jPlayerActions.setOption('current', this.props.index));
      this.props.dispatch(jPlayerActions.setMedia(this.props.playlist[this.props.index]));
    } else {
      this.props.dispatch(jPlayerActions.setOption('current', 0));
    }
  }
  play = () => {
    if (this.props.index >= 0 && this.props.index < this.props.playlist.length) {
      if (this.props.playlist.length) {
        this.props.dispatch(select(this.props.index));
        this.props.dispatch(jPlayerActions.play);
      }
    } else if (this.props.index === undefined) {
      this.props.dispatch(jPlayerActions.play);
    }
  }
  next = () => {
    if (this.props.loop === 'loop') {
      this.props.dispatch(play(this.props.current));
    }
    if (this.props.loop === 'loop-playlist') {
      // See if we need to shuffle before looping to start, and only shuffle if more than 1 item.
      if (this.props.index === 0 && this.props.shuffled &&
          this.props.shuffleOnLoop && this.props.playlist.length > 1) {
        // Shuffle and play the media now
        this.props.dispatch(shuffle(true, true));
      } else {
        this.props.dispatch(play(this.props.index));
      }
    } else if (this.props.index > 0) {
      // The index will be zero if it just looped round
      this.props.dispatch(play(this.props.index));
    }
  }
  previous = () => {
    if ((this.props.loop === 'loop-playlist' && this.props.loopOnPrevious)
        || this.props.index < this.props.playlist.length - 1) {
      this.props.dispatch(play(this.props.index));
    }
  }
  shuffle = () => this.setState({ shuffling: true });
  autoPlay = () => {
    if (this.props.autoPlay) {
      this.props.dispatch(play(this.props.current));
    } else {
      this.props.dispatch(select(this.props.current));
    }
  }
  removeAnimationCallback = (index) => {
    if (this.props.shuffled) {
      const item = this.props.playlist[index];

      for (let i = 0; i < this.originalPlaylist.length; i += 1) {
        if (this.originalPlaylist[i].key === item.key) {
          this.originalPlaylist.splice(i, 1);
          break;
        }
      }
    } else {
      this.originalPlaylist.splice(index, 1);
    }

    // this.props.removeFromArrayByIndex(constants.keys.PLAYLIST, index);

    if (this.originalPlaylist.length) {
      if (index === this.props.current) {
        const current = (index < this.originalPlaylist.length) ? this.props.current
          : this.originalPlaylist.length - 1;

        // To cope when last element being selected when it was removed
        this.props.dispatch(jPlayerActions.setOption('current', current));
        this.props.dispatch(select(current));
      } else if (index < this.props.current) {
        this.props.dispatch(jPlayerActions.setOption('current', this.props.current -= 1));
      }
    } else {
      this.props.dispatch(setOption('current', 0));
      this.props.dispatch(setOption('shuffled', false));
      this.props.dispatch(jPlayerActions.clearMedia);
    }

    this.setState({ removing: false });
  }
  shuffleAnimationCallback = () => {
    if (this.state.shuffling) {
      if (this.props.shuffled) {
        const shuffledPlaylist = [...this.props.playlist].sort(() => 0.5 - Math.random());

        this.props.dispatch(setOption('playlist', shuffledPlaylist));
      } else {
        this.props.dispatch(setOption('playlist', this.originalPlaylist));
      }
      this.setState({ shuffling: false });
    }
  }
  blur = (element) => {
    if (this.props.autoBlur) {
      element.blur();
    }
  }
  render() {
    // const MediaAnimationConfig = this.state.removing ? this.props.removeAnimation
    // : this.props.addAnimation;

    return (
      <div className="jp-playlist" />
    );
  }
}

{ /* <Playlist shuffling={this.state.shuffling} config={this.props.shuffleAnimation} onRest={this.shuffleAnimationCallback}>
          <PlaylistItem
            medias={this.props.playlist} current={this.props.current} config={MediaAnimationConfig} onRest={this._removeAnimationCallback}
            removeItemClass={this.props.removeItemClass} freeGroupClass={this.props.freeGroupClass} itemClass={this.props.itemClass} enableRemoveControls={this.props.enableRemoveControls}
            remove={this.remove} blur={this.blur} play={this.play} mergeOptions={this.mergeOptions}
          />
</Playlist>*/ }

export default connect(mapStateToProps)(JPlaylistContainer);
