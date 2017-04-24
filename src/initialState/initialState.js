import { initialState, jPlaylistDefaultOptions, jPlaylistDefaultStatus } from 'react-jplayer-utils';

export default (connectedJPlaylists) => {
  const jPlaylists = initialState(connectedJPlaylists, {
    ...jPlaylistDefaultOptions,
    ...jPlaylistDefaultStatus,
  }, 'playlistOptions');

  Object.keys(jPlaylists).forEach((key) => {
    jPlaylists[key].playlist = jPlaylists[key].playlist.map((media, index) => ({
      ...media,
      id: index,
    }));
  });

  return jPlaylists;
};
