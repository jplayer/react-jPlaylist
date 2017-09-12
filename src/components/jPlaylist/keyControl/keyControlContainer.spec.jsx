import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

let onKeyDown;
const id = 'TestPlayer';
const mockKeyControl = ({ keyBindings }) =>
  <div onKeyDown={() => onKeyDown(keyBindings)} />;
const keyControlContainer = proxyquire('./keyControlContainer', {
  './keyControl': mockKeyControl,
}).default;
const setup = (jPlaylists, jPlayers, props) =>
  containerSetup(keyControlContainer, jPlaylists, jPlayers, props);

describe('keyControlContainer', () => {
  let jPlaylists;
  let jPlayers;

  beforeEach(() => {
    jPlaylists = {
      [id]: {
        current: 0,
        loop: 'off',
        playlist: [
          {
            id: 0,
            sources: {
              mp3: 'test.mp3',
            },
          },
          {
            id: 1,
            sources: {
              mp3: 'testTwo.mp3',
            },
          },
        ],
      },
    };
    jPlayers = {
      [id]: {},
    };
  });

  describe('custom keyBindings', () => {
    it('merges custom keyBinding with different name', () => {
      onKeyDown = ({ test }) => test.fn();

      const customKeySpy = expect.createSpy();
      const customKeyBindings = {
        test: {
          key: 20,
          fn: customKeySpy,
        },
      };
      const { wrapper } = setup(jPlaylists, jPlayers, { keyBindings: customKeyBindings });

      wrapper.simulate('keydown');

      expect(customKeySpy).toHaveBeenCalled();
    });

    it('custom keyBinding overwrite default function with same name', () => {
      onKeyDown = ({ shuffle }) => shuffle.fn();

      const customKeySpy = expect.createSpy();
      const customKeyBindings = {
        shuffle: {
          fn: customKeySpy,
        },
      };
      const { wrapper } = setup(jPlaylists, jPlayers, { keyBindings: customKeyBindings });

      wrapper.simulate('keydown');

      expect(customKeySpy).toHaveBeenCalled();
    });
  });

  describe('next', () => {
    it('plays next media', () => {
      onKeyDown = ({ next }) => next.fn();
      const { wrapper, store } = setup(jPlaylists, jPlayers);

      wrapper.simulate('keydown');

      const jPlaylist = store.getState().jPlaylists[id];

      expect(jPlaylist.current).toBe(1);
    });
  });

  describe('next', () => {
    it('plays previous media', () => {
      jPlaylists[id].current = 1;

      onKeyDown = ({ previous }) => previous.fn();
      const { wrapper, store } = setup(jPlaylists, jPlayers);

      wrapper.simulate('keydown');

      const jPlaylist = store.getState().jPlaylists[id];

      expect(jPlaylist.current).toBe(0);
    });
  });

  describe('shuffle', () => {
    it('shuffles the media', () => {
      onKeyDown = ({ shuffle }) => shuffle.fn();
      const { wrapper, store } = setup(jPlaylists, jPlayers);

      wrapper.simulate('keydown');

      const jPlaylist = store.getState().jPlaylists[id];

      expect(jPlaylist.shuffled).toBe(true);
    });
  });

  describe('loop', () => {
    it('loops the media', () => {
      onKeyDown = ({ loop }) => loop.fn();
      const { wrapper, store } = setup(jPlaylists, jPlayers);

      wrapper.simulate('keydown');

      const jPlaylist = store.getState().jPlaylists[id];

      expect(jPlaylist.loop).toBe('loop');
    });
  });
});
