import React from 'react';
import PropTypes from 'prop-types';

const PlaylistItem = ({ children }) => (
  <li>
    {children}
  </li>
);

PlaylistItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlaylistItem;
