import React from 'react';
import expect from 'expect';

import Next from './next';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(Next, {
  children: <div />,
  next: expect.createSpy(),
  ...props,
});

describe('Next', () => {
  it('has next class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.NEXT)).toBe(true);
  });

  it('goes to next media on click', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.next).toHaveBeenCalled();
  });

  it('children are rendered', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('children')).toBe(props.children);
  });
});
