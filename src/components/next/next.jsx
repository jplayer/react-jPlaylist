import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Next = ({ next, children }) => (
  <button className={classes.NEXT} onClick={next}>
    {children}
  </button>
);

Next.propTypes = {
  children: PropTypes.node.isRequired,
  next: PropTypes.func.isRequired,
};

export default Next;
