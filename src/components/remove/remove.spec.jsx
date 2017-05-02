import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';

import Remove from './remove';
import { classes } from '../../util/constants';

const setup = () => {
  const props = {
    id: 'jPlaylist-1',
    index: 0,
    remove: createSpy(),
    children: 'test',
    'data-test': 'test',
  };

  const wrapper = shallow(<Remove {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Remove', () => {
  let wrapper;
  let props;

  it('renders', () => {
    ({ wrapper, props } = setup());

    wrapper.simulate('click');

    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.REMOVE)).toBeTruthy();
    expect(props.remove).toHaveBeenCalledWith(props.id, props.index);
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });
});
