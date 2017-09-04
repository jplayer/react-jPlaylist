import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockTogglePlaylist = ({ togglePlaylist }) =>
  <div onClick={togglePlaylist} />;
const TogglePlaylistContainer = proxyquire('./togglePlaylistContainer', {
  './togglePlaylist': mockTogglePlaylist,
}).default;
const setup = (jPlaylists, jPlayers, props) =>
  containerSetup(TogglePlaylistContainer, jPlaylists, jPlayers, props);

describe('TogglePlaylistContainer', () => {
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

  describe('togglePlaylist', () => {
    it('toggles to true when falsy', () => {
      const { wrapper, store } = setup(jPlaylists, jPlayers);

      wrapper.simulate('click');

      const jPlaylist = store.getState().jPlaylists[id];

      expect(jPlaylist.hidePlaylist).toBe(true);
    });

    it('toggles to false when true', () => {
      jPlaylists[id].hidePlaylist = true;

      const { wrapper, store } = setup(jPlaylists, jPlayers);

      wrapper.simulate('click');

      const jPlaylist = store.getState().jPlaylists[id];

      expect(jPlaylist.hidePlaylist).toBe(false);
    });
  });
});
