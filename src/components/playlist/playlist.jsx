import React from 'react';
import PropTypes from 'prop-types';

import PlaylistItem from '../playlistItem/playlistItemContainer';

const Playlist = ({ playlist, children, className }) => (
  <ul className={className}>
    {playlist.map((media, index) => (
      <PlaylistItem key={media.id} index={index}>
        {children}
      </PlaylistItem>))
    }
  </ul>
);

Playlist.propTypes = {
  className: PropTypes.string.isRequired,
  playlist: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      artist: PropTypes.string,
      sources: PropTypes.object.isRequired,
      poster: PropTypes.string,
      id: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]).isRequired,
      free: PropTypes.bool,
    }),
  ).isRequired,
  children: PropTypes.node.isRequired,
};

export default Playlist;
