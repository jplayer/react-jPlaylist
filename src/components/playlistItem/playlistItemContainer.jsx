import React from 'react';
import { Motion, spring } from 'react-motion';
import { connectWithId } from 'react-jplayer-utils';
import { actions as jPlayerActions } from 'react-jplayer';
import PropTypes from 'prop-types';
import { passWithIndex } from 'react-jplayer-utils';

import { setOption, select, remove, play, blur, shuffle, setPlaylist } from '../../actions/actions';
import PlaylistItem from './playlistItem';

const currentMedia = 'jp-playlist-current';

const mapStateToProps = ({ jPlayers, jPlaylists }, { id, index }) => ({
  autoBlur: jPlaylists[id].autoBlur,
  current: jPlaylists[id].current,
  playlistItemAnimationConfig: jPlaylists[id].playlistItemAnimationConfig,
  shuffled: jPlaylists[id].shuffled,
  playlist: jPlaylists[id].playlist,
  itemClass: jPlaylists[id].itemClass,
  index,
  id,
});

class PlaylistItemContainer extends React.Component {
  static get propTypes() {
    return {
      children: React.PropTypes.node.isRequired,
      dispatch: PropTypes.func.isRequired,
      id: PropTypes.number.isRequired,
      index: PropTypes.number.isRequired,
      onClick: PropTypes.func.isRequired,
      current: PropTypes.number.isRequired,
      autoBlur: PropTypes.bool.isRequired,
      minHeight: PropTypes.number.isRequired,
      maxHeight: PropTypes.number.isRequired,
      playlistItemAnimationConfig: PropTypes.object.isRequired,
      shuffled: PropTypes.bool.isRequired,
      playlist: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          artist: PropTypes.string,
          sources: PropTypes.arrayOf(PropTypes.string).isRequired,
          poster: PropTypes.string,
          free: PropTypes.bool,
        }),
      ).isRequired,
      itemClass: React.PropTypes.string.isRequired,
    };
  }
  static get defaultProps() {
    return {
      minHeight: 0,
      maxHeight: 1,
      attributes: null,
    };
  }
  render() {
    const isCurrent = this.props.current === this.props.index;

    return (
      <PlaylistItem isCurrent={isCurrent}>
        {this.props.children}
      </PlaylistItem>
    );
  }
}

export default connectWithId(mapStateToProps)(passWithIndex(PlaylistItemContainer));
