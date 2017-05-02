import { defaultOptions, defaultStatus } from '../util/constants';

export default (jPlaylists) => {
  const newJPlaylists = {};

  Object.keys(jPlaylists).forEach((jPlaylistKey) => {
    const jPlaylist = jPlaylists[jPlaylistKey];
    const options = {};
    const status = {};

    Object.keys(defaultOptions).forEach((key) => {
      if (jPlaylist[key] !== undefined) {
        options[key] = jPlaylist[key];
      }
    });

    Object.keys(defaultStatus).forEach((key) => {
      if (jPlaylist[key] !== undefined) {
        status[key] = jPlaylist[key];
      }
    });

    newJPlaylists[jPlaylistKey] = {
      playlistOptions: options,
      playlistStatus: status,
    };
  });

  return newJPlaylists;
};
