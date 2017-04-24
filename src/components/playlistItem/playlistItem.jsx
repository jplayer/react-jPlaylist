import React from 'react';
import PropTypes from 'prop-types';

import classes from '../../util/classes';

const PlaylistItem = ({ isCurrent, children }) => (
  <li className={isCurrent ? classes.CURRENT : null}>
    {children}
  </li>
);

PlaylistItem.propTypes = {
  isCurrent: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default PlaylistItem;
