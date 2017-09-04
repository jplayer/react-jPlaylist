import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Shuffle = ({ shuffle, children }) => (
  <button className={classes.SHUFFLE} onClick={shuffle}>
    {children}
  </button>
);

Shuffle.propTypes = {
  children: PropTypes.node.isRequired,
  shuffle: PropTypes.func.isRequired,
};

export default Shuffle;
