import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';

import Previous from './previous';
import { classes } from '../../util/constants';

const setup = () => {
  const props = {
    id: 'jPlaylist-1',
    previous: createSpy(),
    children: 'test',
    'data-test': 'test',
  };

  const wrapper = shallow(<Previous {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Previous', () => {
  let wrapper;
  let props;

  it('renders', () => {
    ({ wrapper, props } = setup());

    wrapper.simulate('click');

    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.PREVIOUS)).toBeTruthy();
    expect(props.previous).toHaveBeenCalledWith(props.id);
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });
});
