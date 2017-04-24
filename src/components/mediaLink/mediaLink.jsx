import React from 'react';
import PropTypes from 'prop-types';

import classes from '../../util/classes';

const MediaLink = ({ onClick, id, current, index, children, attributes }) => (
  <button
    className={classes.MEDIA_LINK} onClick={() => onClick(id, current, index)} 
    {...attributes}
  >
    {children}
  </button>
);

MediaLink.propTypes = {
  id: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MediaLink;
