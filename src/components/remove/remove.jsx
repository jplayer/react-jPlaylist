import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Remove = ({ remove, id, index, children, ...attributes }) => (
  <button
    className={classes.REMOVE} onClick={() => remove(id, index)}
    {...attributes}
  >
    {children}
  </button>
);

Remove.defaultProps = {
  children: '×',
};

Remove.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Remove;
