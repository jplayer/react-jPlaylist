import merge from 'lodash.merge';

import defaultOptions from '../util/defaultOptions';

const initialState = (connectedJPlaylists) => {
  const jPlaylistStates = {};
  let newConnectedJPlaylists = connectedJPlaylists;

  if (!Array.isArray(connectedJPlaylists)) {
    newConnectedJPlaylists = [connectedJPlaylists];
  }

  newConnectedJPlaylists.forEach((connectedJPlaylist) => {
    jPlaylistStates[connectedJPlaylist.options.id] = merge({}, {
      ...defaultOptions,
    }, connectedJPlaylist.options);
  });

  return {
    jPlaylists: jPlaylistStates,
  };
};

export default initialState;
