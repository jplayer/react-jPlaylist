import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockMediaLink = ({ play }) =>
  <div onClick={play} />;
const MediaLinkContainer = proxyquire('./mediaLinkContainer', {
  './mediaLink': mockMediaLink,
}).default;
const setup = (jPlaylists, jPlayers, props) =>
  containerSetup(MediaLinkContainer, jPlaylists, jPlayers, props);

describe('MediaLinkContainer', () => {
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

  it('plays media at index onClick', () => {
    const { wrapper, store } = setup(jPlaylists, jPlayers);

    wrapper.simulate('click');

    const jPlaylist = store.getState().jPlaylists[id];

    expect(jPlaylist.current).toBe(0);
  });
});
