import { initialState } from 'react-jplayer-utils';

import { defaultOptions, defaultStatus } from '../util/constants';

export default (connectedJPlaylists) => {
  const jPlaylists = initialState(connectedJPlaylists, {
    ...defaultStatus,
    ...defaultOptions,
  }, 'playlistOptions');

  return jPlaylists;
};
