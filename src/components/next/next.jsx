import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Next = ({ next, id, children, ...attributes }) => (
  <button className={classes.NEXT} onClick={() => next(id)} {...attributes}>
    {children}
  </button>
);

Next.propTypes = {
  children: PropTypes.node.isRequired,
  next: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Next;
