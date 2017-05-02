import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const PlaylistItem = ({ isCurrent, children, attributes }) => (
  <li className={isCurrent ? classes.CURRENT : null} {...attributes}>
    {children}
  </li>
);

PlaylistItem.propTypes = {
  attributes: PropTypes.object.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default PlaylistItem;
