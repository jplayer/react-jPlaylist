import React from 'react';
import expect from 'expect';

import PlaylistItem from './playlistItem';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(PlaylistItem, {
  children: <div />,
  className: classes.CURRENT,
  ...props,
});

describe('PlaylistItem', () => {
  it('has custom class', () => {
    const { wrapper, props } = setup();

    expect(wrapper.hasClass(props.className)).toBe(true);
  });

  it('children are rendered', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('children')).toBe(props.children);
  });
});
