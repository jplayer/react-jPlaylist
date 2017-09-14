import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockNext = ({ next }) =>
  <button onClick={next} />;
const NextContainer = proxyquire('./nextContainer', {
  './next': mockNext,
}).default;
const setup = (jPlaylists, jPlayers, props) =>
  containerSetup(NextContainer, jPlaylists, jPlayers, props);

describe('NextContainer', () => {
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

  it('goes to next media onClick', () => {
    const { wrapper, store } = setup(jPlaylists, jPlayers);

    wrapper.simulate('click');

    const jPlaylist = store.getState().jPlaylists[id];

    expect(jPlaylist.current).toBe(1);
  });
});
