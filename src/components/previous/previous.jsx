import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Previous = ({ previous, children }) => (
  <button className={classes.PREVIOUS} onClick={previous}>
    {children}
  </button>
);

Previous.propTypes = {
  children: PropTypes.node.isRequired,
  previous: PropTypes.func.isRequired,
};

export default Previous;
