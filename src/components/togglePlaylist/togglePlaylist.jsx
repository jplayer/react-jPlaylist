import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const TogglePlaylist = ({ togglePlaylist, children }) => (
  <button
    className={classes.TOGGLE_PLAYLIST}
    onClick={togglePlaylist}
  >
    {children}
  </button>
);

TogglePlaylist.propTypes = {
  children: PropTypes.node.isRequired,
  togglePlaylist: PropTypes.func.isRequired,
};

export default TogglePlaylist;
