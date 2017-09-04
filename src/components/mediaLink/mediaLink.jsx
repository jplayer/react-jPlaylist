import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const MediaLink = ({ play, children }) => (
  <button className={classes.MEDIA_LINK} onClick={play}>
    {children}
  </button>
);

MediaLink.propTypes = {
  children: PropTypes.node.isRequired,
  play: PropTypes.func.isRequired,
};

export default MediaLink;
