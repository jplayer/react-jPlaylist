import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';

import Next from './next';
import { classes } from '../../util/constants';

const setup = () => {
  const props = {
    id: 'jPlaylist-1',
    next: createSpy(),
    children: 'test',
    'data-test': 'test',
  };

  const wrapper = shallow(<Next {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Next', () => {
  let wrapper;
  let props;

  it('renders', () => {
    ({ wrapper, props } = setup());

    wrapper.simulate('click');

    expect(wrapper.hasClass(classes.NEXT)).toBeTruthy();
    expect(props.next).toHaveBeenCalledWith(props.id);
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });
});
