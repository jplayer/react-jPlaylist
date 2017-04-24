import React from 'react';
import PropTypes from 'prop-types';

import classes from '../../util/classes';

const Remove = ({ onClick, id, index, attributes }) => (
  <button
    className={classes.REMOVE} onClick={() => onClick(id, index)}
    {...attributes}
  >
    &times;
  </button>
);

Remove.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  attributes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Remove;
