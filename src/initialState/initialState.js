import shortid from 'shortid';
import { initialState } from 'react-jplayer-utils';

import { defaultOptions, defaultStatus } from '../util/constants';

export default (connectedJPlaylists) => {
  const jPlaylists = initialState(connectedJPlaylists, {
    ...defaultStatus,
    ...defaultOptions,
  }, 'playlistOptions');

  Object.keys(jPlaylists).forEach((key) => {
    jPlaylists[key].playlist = jPlaylists[key].playlist.map((media, index) => ({
      ...media,
      id: shortid.generate(),
      shufflePosition: index,
    }));
  });

  return jPlaylists;
};
