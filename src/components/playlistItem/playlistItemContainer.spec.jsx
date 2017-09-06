import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';
import { toClass } from 'recompose';

import containerSetup from '../../util/specHelpers/containerSetup.spec';
import { classes } from '../../util/constants';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockPlaylistItem = () =>
  <li />;
const PlaylistItemContainer = proxyquire('./playlistItemContainer', {
  './playlistItem': mockPlaylistItem,
}).default;
const setup = (jPlaylists, jPlayers, props) =>
  containerSetup(toClass(PlaylistItemContainer), jPlaylists, jPlayers, props);

describe('PlaylistItemContainer', () => {
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
    it('does not contain jp-current when not current playlistItem', () => {
      const index = 1;
      const { wrapper } = setup(jPlaylists, jPlayers, { index });
      const component = wrapper.find(mockPlaylistItem);

      expect(component.prop('className')).toNotContain(classes.CURRENT);
    });

    it('contains jp-current when current playlistItem', () => {
      jPlaylists[id].current = 1;
      const index = 1;
      const { wrapper } = setup(jPlaylists, jPlayers, { index });
      const component = wrapper.find(mockPlaylistItem);

      expect(component.prop('className')).toContain(classes.CURRENT);
    });
  });
});
