import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockShuffle = ({ shuffle }) =>
  <div onClick={shuffle} />;
const ShuffleContainer = proxyquire('./shuffleContainer', {
  './shuffle': mockShuffle,
}).default;
const setup = (jPlaylists, jPlayers, props) =>
  containerSetup(ShuffleContainer, jPlaylists, jPlayers, props);

describe('ShuffleContainer', () => {
  let jPlayers;
  let jPlaylists;

  beforeEach(() => {
    jPlayers = {
      [id]: {},
    };
    jPlaylists = {
      [id]: {
        current: 0,
        playlist: [
          {
            id: 0,
            sources: {
              mp3: 'test.mp3',
            },
          },
        ],
      },
    };
  });

  it('shuffles the media onClick', () => {
    const { wrapper, store } = setup(jPlaylists, jPlayers);

    wrapper.simulate('click');

    const jPlaylist = store.getState().jPlaylists[id];

    expect(jPlaylist.shuffled).toBe(true);
  });
});
