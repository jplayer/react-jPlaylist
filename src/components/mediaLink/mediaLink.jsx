import React from 'react';
import PropTypes from 'prop-types';

import classes from '../../util/classes';

const MediaLink = ({ onClick, children, attributes }) => (
  <button className={classes.MEDIA_LINK} onClick={onClick} {...attributes}>
    {children}
  </button>
);

MediaLink.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MediaLink;
