import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const MediaLink = ({ play, id, index, children, ...attributes }) => (
  <button
    className={classes.MEDIA_LINK} onClick={() => play(id, index)}
    {...attributes}
  >
    {children}
  </button>
);

MediaLink.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  play: PropTypes.func.isRequired,
};

export default MediaLink;
