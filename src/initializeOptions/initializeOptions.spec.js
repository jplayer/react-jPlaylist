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
  const jPlayerOptions = {
    id: 'TestPlayer',
    media: {
      sources: [
        { mp3: 'www.test.mp3' },
      ],
    },
  };

  it('sets up initial jPlaylist options correctly', () => {
    const jPlaylistOptions = {
      hidePlaylist: true,
    };

    initializeOptions(jPlayerOptions, jPlaylistOptions);

    expect(initialState).toEqual({
      [jPlayerOptions.id]: merge({}, defaultStatus, defaultOptions, jPlaylistOptions),
    });
  });

  it('calls react-jplayers initializeOptions', () => {
    initializeOptions(jPlayerOptions);

    expect(jPlayerInitializeOptions).toHaveBeenCalledWith(jPlayerOptions);
  });

  afterEach(() => {
    jPlayerInitializeOptions.reset();
  });
});
