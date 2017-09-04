import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockPrevious = ({ previous }) =>
  <div onClick={previous} />;
const PreviousContainer = proxyquire('./previousContainer', {
  './previous': mockPrevious,
}).default;
const setup = (jPlaylists, jPlayers, props) =>
  containerSetup(PreviousContainer, jPlaylists, jPlayers, props);

describe('PreviousContainer', () => {
  let jPlayers;
  let jPlaylists;

  beforeEach(() => {
    jPlayers = {
      [id]: {},
    };
    jPlaylists = {
      [id]: {
        current: 1,
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
  });

  it('goes to previous media onClick', () => {
    const { wrapper, store } = setup(jPlaylists, jPlayers);

    wrapper.simulate('click');

    const jPlaylist = store.getState().jPlaylists[id];

    expect(jPlaylist.current).toBe(0);
  });
});
