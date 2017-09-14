/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import KeyControl from './keyControl/keyControlContainer';

const JPlaylist = ({ states, keyBindings, children, id }) => (
  <KeyControl keyBindings={keyBindings}>
    {React.cloneElement(React.Children.only(children), {
      states,
      id,
    })}
  </KeyControl>
);

JPlaylist.defaultProps = {
  keyBindings: null,
};

JPlaylist.propTypes = {
  id: PropTypes.string.isRequired,
  states: PropTypes.object.isRequired,
  keyBindings: PropTypes.object,
  children: PropTypes.element.isRequired,
};

export default JPlaylist;
