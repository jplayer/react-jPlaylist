import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';
import { constants } from 'react-jplayer';

import containerSetup from '../../util/specHelpers/containerSetup.spec';
import { setOption, setPlaylist, next } from '../../actions/actions';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockJPlaylist = () =>
  <div />;
const JPlaylistContainer = proxyquire('./jPlaylistContainer', {
  './jPlaylist': mockJPlaylist,
}).default;
const setup = (jPlaylists, jPlayers, props) =>
  containerSetup(JPlaylistContainer, jPlaylists, jPlayers, {
    id,
    ...props,
  });

const media = document.createElement('audio');

describe('JPlaylistContainer', () => {
  let jPlayers;
  let jPlaylists;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        src: 'test.mp3',
      },
    };
    jPlaylists = {
      [id]: {
        current: 0,
        playlist: [
          {
            id: 'test',
            sources: {
              mp3: 'test.mp3',
            },
          },
        ],
      },
    };
    expect.spyOn(document, 'getElementById').andReturn({
      getElementsByClassName: expect.createSpy().andReturn([media]),
    });
  });

  describe('prop updated', () => {
    describe('changeMedia', () => {
      it('sets the new media when playlist is not empty', () => {
        const { store } = setup(jPlaylists, jPlayers);
        const playlist = [
          {
            id: 'newTest',
            sources: {
              mp3: 'newTest.mp3',
            },
          },
        ];

        store.dispatch(setPlaylist(id, playlist));

        const jPlayer = store.getState().jPlayers[id];

        expect(jPlayer.media).toContain(playlist[0]);
      });
    });
  });

  describe('clearMediaWhenPlaylistEmpty', () => {
    it('clears the media when playlist is empty', () => {
      const { store } = setup(jPlaylists, jPlayers);
      const playlist = [];

      store.dispatch(setPlaylist(id, playlist));

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer).toEqual({
        ...constants.defaultStatus,
        media: constants.defaultOptions.media,
      });
    });
  });

  describe('setLoop', () => {
    it('sets jPlayer loop to false when looping', () => {
      const { store } = setup(jPlaylists, jPlayers);

      store.dispatch(setOption(id, 'loop', 'off'));

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.loop).toBe(false);
    });

    it('sets jPlayer loop to true when looping', () => {
      const { store } = setup(jPlaylists, jPlayers);

      store.dispatch(setOption(id, 'loop', 'loop'));

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.loop).toBe(true);
    });
  });

  describe('playMediaNow', () => {
    it('plays jPlayer', () => {
      const { store } = setup(jPlaylists, jPlayers);

      store.dispatch(setOption(id, 'playNow', true));

      const jPlayer = store.getState().jPlayers[id];
      const jPlaylist = store.getState().jPlaylists[id];

      expect(jPlayer.paused).toBe(false);
      expect(jPlaylist.playNow).toBe(false);
    });
  });

  afterEach(() => {
    expect.restoreSpies();
  });
});
