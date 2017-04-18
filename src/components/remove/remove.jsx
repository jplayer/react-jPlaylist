import React from 'react';
import PropTypes from 'prop-types';

import classes from '../../util/classes';

const Remove = ({ onClick, attributes }) => (
  <button className={classes.REMOVE} onClick={onClick} {...attributes}>
    &times;
  </button>
);

Remove.propTypes = {
  attributes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Remove;
