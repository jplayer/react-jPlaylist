import React from 'react';

const Playlist = (height, children) => (
  <ul style={{ transform: `scaleY(${height})`, transformOrigin: '50% top' }}>
    {children}
  </ul>
);

Playlist.propTypes = {
  height: React.PropTypes.number.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default Playlist;
