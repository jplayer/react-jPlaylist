import React from 'react';
import PropTypes from 'prop-types';

const PlaylistItem = ({ className, children }) => (
  <li className={className}>
    {children}
  </li>
);

PlaylistItem.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PlaylistItem;
