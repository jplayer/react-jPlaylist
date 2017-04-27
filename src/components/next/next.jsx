import React from 'react';
import PropTypes from 'prop-types';

import classes from '../../util/classes';

const Next = ({ next, id, children, attributes }) => (
  <button className={classes.NEXT} onClick={() => next(id)} {...attributes}>
    {children}
  </button>
);

Next.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  next: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Next;
