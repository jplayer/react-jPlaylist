import React from 'react';
import PropTypes from 'prop-types';

import KeyControl from './keyControl/keyControlContainer';

const JPlaylist = ({ states, keyBindings, children, id }) => (
  <div>
    <KeyControl keyBindings={keyBindings} />
    {React.cloneElement(children, {
      states,
      id,
    })}
  </div>
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
