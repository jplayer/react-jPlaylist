import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Playlist from './playlist';
import PlaylistItem from '../playlistItem/playlistItemContainer';
import mockJPlaylistOptions from '../../util/mockData/mockJPlaylistOptions';

const setup = () => {
  const props = {
    playlist: mockJPlaylistOptions.playlist,
    children: 'test',
    attributes: {
      'data-test': 'test',
    },
  };

  const wrapper = shallow(<Playlist {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Playlist', () => {
  let wrapper;
  let props;

  it('renders', () => {
    ({ wrapper, props } = setup());

    const playlistItems = wrapper.find(PlaylistItem);

    playlistItems.forEach((playlistItem, index) => {
      expect(playlistItem.key()).toBe(props.playlist[index].id);
      expect(playlistItem.prop('index')).toBe(index);
      expect(playlistItem.prop('children')).toBe(props.children);
    });

    expect(playlistItems.length).toBe(3);
    expect(wrapper.prop('data-test')).toBe(props.attributes['data-test']);
  });
});

export default setup;
