import React from 'react';
import expect from 'expect';

import Playlist from './playlist';
import PlaylistItem from '../playlistItem/playlistItemContainer';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = (props) => {
  const values = componentSetup(Playlist, {
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

  values.playlist = values.wrapper.dive();

  return values;
};

describe('Playlist', () => {
  describe('when the playlist is not empty', () => {
    it('has custom class', () => {
      const { playlist, props } = setup();

      expect(playlist.hasClass(props.className)).toBe(true);
    });

    describe('PlaylistItem', () => {
      it('renders as many as playlist', () => {
        const { playlist, props } = setup();
        const playlistItems = playlist.dive().find(PlaylistItem);

        expect(playlistItems.length).toBe(props.playlist.length);
      });

      it('children are rendered in PlaylistItem', () => {
        const { playlist, props } = setup();
        const playlistItem = playlist.dive().find(PlaylistItem).at(0);

        expect(playlistItem.prop('children')).toBe(props.children);
      });
    });
  });

  it('renders nothing if the playlist is empty', () => {
    const { playlist } = setup({ playlist: [] });

    expect(playlist.type()).toBe(null);
  });
});
