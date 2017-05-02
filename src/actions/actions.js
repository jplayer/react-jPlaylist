import { actionNames } from '../util/constants';

export const setOption = (id, key, value) => ({
  type: actionNames.SET_OPTION,
  id,
  key,
  value,
});

export const setPlaylist = (id, playlist) => ({
  type: actionNames.SET_PLAYLIST,
  id,
  playlist,
});

export const add = (id, media, playNow) => ({
  type: actionNames.ADD,
  id,
  media,
  playNow,
});

export const remove = (id, index) => ({
  type: actionNames.REMOVE,
  id,
  index,
});

export const clear = id => ({
  type: actionNames.CLEAR,
  id,
});

export const select = (id, index) => ({
  type: actionNames.SELECT,
  id,
  index,
});

export const play = (id, index) => ({
  type: actionNames.PLAY,
  id,
  index,
});

export const shuffle = (id, shuffled, playNow) => ({
  type: actionNames.SHUFFLE,
  id,
  shuffled,
  playNow,
});

export const next = id => ({
  type: actionNames.NEXT,
  id,
});

export const previous = id => ({
  type: actionNames.PREVIOUS,
  id,
});
