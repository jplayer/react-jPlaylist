import React from 'react';
import PropTypes from 'prop-types';

import PlaylistItem from '../playlistItem/playlistItemContainer';

let key = 0;

const JPlaylist = ({ playlist, children, attributes }) => (
  <ul {...attributes}>
    {playlist.map((_, index) => {
      key += 1;

      return (
        <PlaylistItem key={key} index={index}>
          {children}
        </PlaylistItem>
      );
    })
    }
  </ul>
);

JPlaylist.propTypes = {
  attributes: PropTypes.object.isRequired,
  playlist: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        artist: PropTypes.string,
        sources: PropTypes.arrayOf(PropTypes.string).isRequired,
        poster: PropTypes.string,
        free: PropTypes.bool,
      }),
  ).isRequired,
  children: PropTypes.node.isRequired,
};

export default JPlaylist;
