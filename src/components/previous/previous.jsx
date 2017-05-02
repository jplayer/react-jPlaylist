import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Previous = ({ previous, id, children, ...attributes }) => (
  <button className={classes.PREVIOUS} onClick={() => previous(id)} {...attributes}>
    {children}
  </button>
);

Previous.propTypes = {
  children: PropTypes.node.isRequired,
  previous: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Previous;
