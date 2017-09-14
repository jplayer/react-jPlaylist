import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

const id = 'TestPlayer';
const mockRepeat = ({ loop }) =>
  <button onClick={loop} />;
const RepeatContainer = proxyquire('./repeatContainer', {
  'react-jplayer': { RepeatComponent: mockRepeat },
}).default;
const setup = (jPlaylists, jPlayers, props) =>
  containerSetup(RepeatContainer, jPlaylists, jPlayers, props);

describe('RepeatContainer', () => {
  let jPlayers;
  let jPlaylists;

  beforeEach(() => {
    jPlayers = {
      [id]: {},
    };
    jPlaylists = {
      [id]: {
        loop: 'off',
      },
    };
  });

  it('loops media onClick', () => {
    const { wrapper, store } = setup(jPlaylists, jPlayers);

    wrapper.simulate('click');

    const jPlaylist = store.getState().jPlaylists[id];

    expect(jPlaylist.loop).toBe('loop');
  });
});
