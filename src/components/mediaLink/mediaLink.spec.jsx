import React from 'react';
import expect from 'expect';

import MediaLink from './mediaLink';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(MediaLink, {
  children: <div />,
  play: expect.createSpy(),
  ...props,
});

describe('MediaLink', () => {
  it('has mediaLink class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.MEDIA_LINK)).toBe(true);
  });

  it('plays media on click', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.play).toHaveBeenCalled();
  });

  it('children are rendered', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('children')).toBe(props.children);
  });
});
