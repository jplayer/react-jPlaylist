import React from 'react';
import PropTypes from 'prop-types';

import classes from '../../util/classes';

const TogglePlaylist = ({ togglePlaylist, hidePlaylist, id, children, attributes }) => (
  <button
    className={classes.TOGGLE_PLAYLIST}
    onClick={() => togglePlaylist(id, hidePlaylist)}
    {...attributes}
  >
    {children}
  </button>
);

TogglePlaylist.propTypes = {
  hidePlaylist: PropTypes.bool.isRequired,
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  togglePlaylist: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default TogglePlaylist;
