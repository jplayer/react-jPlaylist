import { initialState, jPlaylistDefaultOptions, jPlaylistDefaultStatus } from 'react-jplayer-utils';

export default (connectedJPlayers) => {
  const jPlaylists = initialState(connectedJPlayers, {
    ...jPlaylistDefaultOptions,
    ...jPlaylistDefaultStatus,
  });

  Object.keys(jPlaylists).forEach((key) => {
    jPlaylists[key].playlist = jPlaylists[key].playlist.map((media, index) => ({
      ...media,
      id: index,
    }));
  });

  return jPlaylists;
};
