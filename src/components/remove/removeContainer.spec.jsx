import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockRemove = ({ remove }) =>
  <div onClick={remove} />;
const RemoveContainer = proxyquire('./removeContainer', {
  './remove': mockRemove,
}).default;
const setup = (jPlaylists, jPlayers, props) =>
  containerSetup(RemoveContainer, jPlaylists, jPlayers, props);

describe('RemoveContainer', () => {
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

  it('removes media onClick', () => {
    const { wrapper, store } = setup(jPlaylists, jPlayers);

    wrapper.simulate('click');

    const jPlaylist = store.getState().jPlaylists[id];

    expect(jPlaylist.playlist.length).toBe(0);
  });
});
