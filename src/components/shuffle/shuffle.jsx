import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Shuffle = ({ shuffle, id, children, ...attributes }) => (
  <button
    className={classes.SHUFFLE} onClick={() => shuffle(id, undefined, true)}
    {...attributes}
  >
    {children}
  </button>
);

Shuffle.propTypes = {
  children: PropTypes.node.isRequired,
  shuffle: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Shuffle;
