import React from 'react';
import PropTypes from 'prop-types';

import PlaylistItem from '../playlistItem/playlistItemContainer';

const Playlist = ({ playlist, children, attributes }) => (
  <ul {...attributes}>
    {playlist.map((media, index) => (
      <PlaylistItem key={media.id} index={index}>
        {children}
      </PlaylistItem>))
    }
  </ul>
);

Playlist.propTypes = {
  attributes: PropTypes.object.isRequired,
  playlist: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        artist: PropTypes.string,
        sources: PropTypes.arrayOf(PropTypes.string).isRequired,
        poster: PropTypes.string,
        id: PropTypes.number.isRequired,
        free: PropTypes.bool,
      }),
  ).isRequired,
  children: PropTypes.node.isRequired,
};

export default Playlist;
