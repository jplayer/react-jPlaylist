import merge from 'lodash.merge';

import { actionNames } from '../util/actionNames';

const setPlaylist = (jPlaylist, { playlist }) => {
  const newJPlaylist = { ...jPlaylist };

  newJPlaylist.current = 0;
  newJPlaylist.shuffled = false;
  newJPlaylist.originalPlaylist = merge([], playlist);

  for (let i = 0; i < newJPlaylist.originalPlaylist.length; i += 1) {
    newJPlaylist.originalPlaylist[i].key = i;
    this._addFreeMediaLinks(newJPlaylist.originalPlaylist[i]);
  }
  newJPlaylist.playlist = newJPlaylist.originalPlaylist;
};

const jPlaylistReducer = (state, action) => {
  switch (action.type) {
    case actionNames.SET_PLAYLIST:
      return setPlaylist(state[action.id], action);
    default:
      return state;
  }
};

export default jPlaylistReducer;
