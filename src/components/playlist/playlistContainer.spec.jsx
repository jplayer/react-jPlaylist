import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';
import { classes as sharedClasses } from 'react-jplayer-utils';

import containerSetup from '../../util/specHelpers/containerSetup.spec';
import { classes } from '../../util/constants';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockPlaylist = () =>
  <div />;
const PlaylistContainer = proxyquire('./playlistContainer', {
  './playlist': mockPlaylist,
}).default;
const setup = (jPlaylists, jPlayers, props) =>
  containerSetup(PlaylistContainer, jPlaylists, jPlayers, props);

describe('PlaylistContainer', () => {
  let jPlayers;
  let jPlaylists;

  beforeEach(() => {
    jPlayers = {
      [id]: {},
    };
    jPlaylists = {
      [id]: {},
    };
  });

  describe('className', () => {
    it('is playlist', () => {
      const { wrapper, store } = setup(jPlaylists, jPlayers);
      const component = wrapper.find(mockPlaylist);

      expect(component.prop('className')).toBe(classes.PLAYLIST);
    });

    it('renders custom as well as default', () => {
      const className = 'jp-test';
      const { wrapper, store } = setup(jPlaylists, jPlayers, { className });
      const component = wrapper.find(mockPlaylist);

      expect(component.prop('className')).toContain(classes.PLAYLIST);
      expect(component.prop('className')).toContain(className);
    });

    it('renders hidden when hidePlaylist is true as well as default', () => {
      jPlaylists[id].hidePlaylist = true;

      const { wrapper, store } = setup(jPlaylists, jPlayers);
      const component = wrapper.find(mockPlaylist);

      expect(component.prop('className')).toContain(classes.PLAYLIST);
      expect(component.prop('className')).toContain(sharedClasses.HIDDEN);
    });
  });
});
