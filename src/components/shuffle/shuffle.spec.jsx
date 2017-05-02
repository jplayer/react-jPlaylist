import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';

import Shuffle from './shuffle';
import { classes } from '../../util/constants';

const setup = () => {
  const props = {
    id: 'jPlaylist-1',
    shuffle: createSpy(),
    children: 'test',
    'data-test': 'test',
  };

  const wrapper = shallow(<Shuffle {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Shuffle', () => {
  let wrapper;
  let props;

  it('renders', () => {
    ({ wrapper, props } = setup());

    wrapper.simulate('click');

    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.SHUFFLE)).toBeTruthy();
    expect(props.shuffle).toHaveBeenCalledWith(props.id, undefined, true);
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });
});
