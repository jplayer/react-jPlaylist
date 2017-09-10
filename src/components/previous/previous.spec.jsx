import React from 'react';
import expect from 'expect';

import Previous from './previous';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(Previous, {
  children: <div />,
  previous: expect.createSpy(),
  ...props,
});

describe('Previous', () => {
  it('has previous class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.PREVIOUS)).toBe(true);
  });

  it('goes to previous media on click', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.previous).toHaveBeenCalled();
  });

  it('children are rendered', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('children')).toBe(props.children);
  });
});
