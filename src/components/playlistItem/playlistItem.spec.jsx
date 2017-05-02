import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import PlaylistItem from './playlistItem';
import { classes } from '../../util/constants';

const setup = (newProps) => {
  const props = {
    isCurrent: false,
    children: 'test',
    attributes: {
      'data-test': 'test',
    },
    ...newProps,
  };

  const wrapper = shallow(<PlaylistItem {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('PlaylistItem', () => {
  let wrapper;
  let props;

  it('renders', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.CURRENT)).toBeFalsy();
    expect(wrapper.prop('data-test')).toBe(props.attributes['data-test']);
  });

  it('current playlistItem has the class current', () => {
    ({ wrapper, props } = setup({ isCurrent: true }));

    expect(wrapper.hasClass(classes.CURRENT)).toBeTruthy();
  });
});

export default setup;
