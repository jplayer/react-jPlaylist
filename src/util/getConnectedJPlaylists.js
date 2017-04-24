import { jPlaylistDefaultOptions, jPlaylistDefaultStatus } from 'react-jplayer-utils';

export default (jPlaylists) => {
  const newJPlaylists = {};

  Object.keys(jPlaylists).forEach((jPlaylistKey) => {
    const jPlaylist = jPlaylists[jPlaylistKey];
    const options = {};
    const status = {};

    Object.keys(jPlaylistDefaultOptions).forEach((key) => {
      if (jPlaylist[key] !== undefined) {
        options[key] = jPlaylist[key];
      }
    });

    Object.keys(jPlaylistDefaultStatus).forEach((key) => {
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
