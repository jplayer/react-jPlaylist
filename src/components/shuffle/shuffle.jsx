import React from 'react';
import PropTypes from 'prop-types';

import classes from '../../util/classes';

const Shuffle = ({ onClick, id, children, attributes }) => (
  <button className={classes.SHUFFLE} onClick={() => onClick(id)} {...attributes}>
    {children}
  </button>
);

Shuffle.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Shuffle;
