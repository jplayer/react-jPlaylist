import React from 'react';
import PropTypes from 'prop-types';

import classes from '../../util/classes';

const Next = ({ onClick, id, children, attributes }) => (
  <button className={classes.NEXT} onClick={() => onClick(id)} {...attributes}>
    {children}
  </button>
);

Next.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Next;
