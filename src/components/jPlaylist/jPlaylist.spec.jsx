import React from 'react';
import expect from 'expect';

import JPlaylist from './jPlaylist';
import KeyControl from './keyControl/keyControlContainer';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(JPlaylist, {
  children: <div className="@@jPlaylist" />,
  id: 'TestPlayer',
  states: {},
  ...props,
});

describe('JPlaylist', () => {
  describe('KeyControl', () => {
    it('passes in keyBindings', () => {
      const keyBindings = {};
      const { wrapper } = setup({ keyBindings });
      const keyControl = wrapper.find(KeyControl);

      expect(keyControl.prop('keyBindings')).toBe(keyBindings);
    });
  });

  describe('children', () => {
    it('passes in states', () => {
      const { wrapper, props } = setup();
      const child = wrapper.find('.@@jPlaylist');

      expect(child.prop('states')).toBe(props.states);
    });

    it('passes in id', () => {
      const { wrapper, props } = setup();
      const child = wrapper.find('.@@jPlaylist');

      expect(child.prop('id')).toBe(props.id);
    });
  });
});
