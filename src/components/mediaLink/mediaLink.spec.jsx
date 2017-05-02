import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';

import MediaLink from './mediaLink';
import { classes } from '../../util/constants';

const setup = () => {
  const props = {
    id: 'jPlaylist-1',
    index: 0,
    play: createSpy(),
    children: 'test',
    'data-test': 'test',
  };

  const wrapper = shallow(<MediaLink {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('MediaLink', () => {
  let wrapper;
  let props;

  it('renders', () => {
    ({ wrapper, props } = setup());

    wrapper.simulate('click');

    expect(wrapper.hasClass(classes.MEDIA_LINK)).toBeTruthy();
    expect(props.play).toHaveBeenCalledWith(props.id, props.index);
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });
});
