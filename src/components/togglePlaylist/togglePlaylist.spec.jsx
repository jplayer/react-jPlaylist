import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';

import TogglePlaylist from './togglePlaylist';
import { classes } from '../../util/constants';

const setup = () => {
  const props = {
    id: 'jPlaylist-1',
    togglePlaylist: createSpy(),
    hidePlaylist: false,
    children: 'test',
    'data-test': 'test',
  };

  const wrapper = shallow(<TogglePlaylist {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('TogglePlaylist', () => {
  let wrapper;
  let props;

  it('renders', () => {
    ({ wrapper, props } = setup());

    wrapper.simulate('click');

    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.TOGGLE_PLAYLIST)).toBeTruthy();
    expect(props.togglePlaylist).toHaveBeenCalledWith(props.id, !props.hidePlaylist);
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });
});

export default setup;
