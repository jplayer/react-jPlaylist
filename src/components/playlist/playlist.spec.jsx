import React from 'react';
import expect from 'expect';

import Playlist from './playlist';
import PlaylistItem from '../playlistItem/playlistItemContainer';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(Playlist, {
  children: <div />,
  className: classes.PLAYLIST,
  playlist: [
    {
      id: 0,
      sources: {
        mp3: 'test.mp3',
      },
    },
    {
      id: 2,
      sources: {
        mp3: 'testTwo.mp3',
      },
    },
  ],
  ...props,
});

describe('Playlist', () => {
  it('has custom class', () => {
    const { wrapper, props } = setup();

    expect(wrapper.hasClass(props.className)).toBe(true);
  });

  describe('PlaylistItem', () => {
    it('renders as many as playlist', () => {
      const { wrapper, props } = setup();
      const playlistItems = wrapper.find(PlaylistItem);

      expect(playlistItems.length).toBe(props.playlist.length);
    });

    it('children are rendered in PlaylistItem', () => {
      const { wrapper, props } = setup();
      const playlistItem = wrapper.find(PlaylistItem).at(0);

      expect(playlistItem.prop('children')).toBe(props.children);
    });
  });
});
