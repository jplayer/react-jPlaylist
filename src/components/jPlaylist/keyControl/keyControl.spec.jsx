import React from 'react';
import expect from 'expect';

import KeyControl from './keyControl';
import componentSetup from '../../../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(KeyControl, {
  children: <div className="@@keyBindings" />,
  keyBindings: {},
  ...props,
});

describe('KeyControl', () => {
  it('passes in keyBindings on the children', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('.@@keyBindings').prop('keyBindings')).toBe(props.keyBindings);
  });
});
