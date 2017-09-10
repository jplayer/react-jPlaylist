import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Remove = ({ remove, children }) => (
  <button className={classes.REMOVE} onClick={remove}>
    {children}
  </button>
);

Remove.defaultProps = {
  children: '×',
};

Remove.propTypes = {
  children: PropTypes.node,
  remove: PropTypes.func.isRequired,
};

export default Remove;
