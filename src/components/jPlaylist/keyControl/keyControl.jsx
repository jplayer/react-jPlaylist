/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

const KeyControl = ({ keyBindings, children }) => (
  React.cloneElement(React.Children.only(children), {
    keyBindings,
  })
);

KeyControl.propTypes = {
  children: PropTypes.element.isRequired,
  keyBindings: PropTypes.object.isRequired,
};

export default KeyControl;
