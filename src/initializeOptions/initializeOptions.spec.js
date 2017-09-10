import expect from 'expect';
import merge from 'lodash.merge';
import proxyquire from 'proxyquire';

import { defaultStatus, defaultOptions } from '../util/constants';

proxyquire.noCallThru();

const jPlayerInitializeOptions = expect.createSpy();
const proxy = proxyquire('./initializeOptions', {
  'react-jplayer': { initializeOptions: jPlayerInitializeOptions },
});
const initializeOptions = proxy.default;
const initialState = proxy.initialState;

describe('initializeOptions', () => {
  let jPlayerOptions;
  let jPlaylistOptions;

  beforeEach(() => {
    jPlayerOptions = {
      id: 'TestPlayer',
    };
    jPlaylistOptions = {
      hidePlaylist: true,
    };
  });

  it('sets up initial jPlaylist options correctly', () => {
    initializeOptions(jPlayerOptions, jPlaylistOptions);

    expect(initialState).toEqual({
      [jPlayerOptions.id]: merge({}, defaultStatus, defaultOptions, jPlaylistOptions),
    });
  });

  describe('react-jplayers initializeOptions', () => {
    it('is passed correct jPlayerOptions when playlist is not specified', () => {
      initializeOptions(jPlayerOptions, jPlaylistOptions);

      expect(jPlayerInitializeOptions).toHaveBeenCalledWith(jPlayerOptions);
    });

    it('is passed correct jPlayerOptions when playlist is specified', () => {
      jPlaylistOptions.playlist = [
        {
          id: 0,
          sources: {
            m4a: 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
          },
        },
      ];

      initializeOptions(jPlayerOptions, jPlaylistOptions);

      jPlayerOptions.media = jPlaylistOptions.playlist[0];

      expect(jPlayerInitializeOptions).toHaveBeenCalledWith(jPlayerOptions);
    });
  });

  afterEach(() => {
    jPlayerInitializeOptions.reset();
  });
});
