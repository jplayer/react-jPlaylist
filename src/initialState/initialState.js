import { initialState, jPlaylistDefaultOptions, jPlaylistDefaultStatus } from 'react-jplayer-utils';
import shortid from 'shortid';

export default (connectedJPlaylists) => {
  const jPlaylists = initialState(connectedJPlaylists, {
    ...jPlaylistDefaultOptions,
    ...jPlaylistDefaultStatus,
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
