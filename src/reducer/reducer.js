import { constants } from 'react-jplayer';
import { updateObject } from 'react-jplayer-utils';

import actionNames from '../util/actionNames';

const add = ({ media }, playNow) => {
  const newMedia = { ...media };

  addFreeMediaLinks(media);
  newMedia.key = maxBy(jPlaylist.playlist, 'key').key + 1;

  this.original.push(media);
  jPlaylist.addUniqueToArray(constants.keys.PLAYLIST_CLASS, media);

  if (playNow) {
    this.play(jPlaylist.playlist.length - 1);
  } else if (this.original.length === 1) {
    this.select(0);
  }

  return media;
};

const remove = (jPlaylist, { index }) => {
  const newPlaylist = [...jPlaylist.playlist];

  newPlaylist[index].isRemoving = true;

  return updateObject(jPlaylist, {
    playlist: newPlaylist,
  });
};

const clear = jPlaylist => updateObject(jPlaylist, {
  playlist: [],
});

// Negative index relates to the end of the array
const select = (jPlaylist, { index }) => updateObject(jPlaylist, {
  current: (index < 0) ? jPlaylist.original.length + index : index,
});

// Negative index relates to the end of the array
const play = (jPlaylist, { index = jPlaylist.current }) => updateObject(jPlaylist, {
  current: (index < 0) ? jPlaylist.original.length + index : index,
  paused: false,
});

const pause = jPlaylist => updateObject(jPlaylist, {
  paused: true,
});

const shuffle = (jPlaylist, { shuffled, playNow }) => updateObject(jPlaylist, {
  shuffled: shuffled === undefined ? !jPlaylist.shuffled : shuffled,
  playNow,
});

const next = (jPlaylist) => {
  const current = jPlaylist.loop === 'loop-playlist' ? 0 : jPlaylist.current;

  return updateObject(jPlaylist, {
    current: jPlaylist.current + 1 < jPlaylist.playlist.length ?
      jPlaylist.current + 1 : current,
  });
};

const previous = jPlaylist => updateObject(jPlaylist, {
  current: jPlaylist.current - 1 >= 0 ? jPlaylist.current - 1
    : jPlaylist.playlist.length - 1,
});

const setPlaylist = (jPlaylist, { playlist }) =>
updateObject(jPlaylist, {
  current: 0,
  shuffled: false,
  playlist,
});

const updatePlaylist = (jPlaylist, action) => {
  switch (action.type) {
    case actionNames.SET_OPTION:
      return updateObject(jPlaylist, { [action.key]: action.value });
    case actionNames.SET_PLAYLIST:
      return setPlaylist(jPlaylist, action);
    case actionNames.ADD:
      return add(jPlaylist, action);
    case actionNames.REMOVE:
      return remove(jPlaylist, action);
    case actionNames.CLEAR:
      return clear(jPlaylist, action);
    case actionNames.SELECT:
      return select(jPlaylist, action);
    case actionNames.PLAY:
      return play(jPlaylist, action);
    case actionNames.PAUSE:
      return pause(jPlaylist, action);
    case actionNames.SHUFFLE:
      return shuffle(jPlaylist, action);
    case actionNames.NEXT:
      return next(jPlaylist, action);
    case actionNames.PREVIOUS:
      return previous(jPlaylist, action);
    default:
      return null;
  }
};

const jPlaylistReducer = (state = {}, action) => {
  const jPlaylist = updatePlaylist(state[action.id], action);

  if (jPlaylist !== null) {
    return updateObject(state, {
      [action.id]: jPlaylist,
    });
  }
  return state;
};

export default jPlaylistReducer;
