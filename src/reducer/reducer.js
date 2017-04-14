import maxBy from 'lodash.maxby';
import { constants } from 'react-jplayer';

import actionNames from '../util/actionNames';
import updateObject from '../util/updateObject';

const add = ({ media }, playNow) => {
  const newMedia = { ...media };

  addFreeMediaLinks(media);
  newMedia.key = maxBy(this.props.playlist, 'key').key + 1;

  this.original.push(media);
  this.props.addUniqueToArray(constants.keys.PLAYLIST_CLASS, media);

  if (playNow) {
    this.play(this.props.playlist.length - 1);
  } else if (this.original.length === 1) {
    this.select(0);
  }

  return media;
};

const remove = ({ playlist }, index) => {
  const newPlaylist = [...playlist];

  if (index === undefined) {
    this._initPlaylist([]);
    this.context.clearMedia();
  } else {
    newPlaylist[index].isRemoving = true;

    this.props.setOption('playlist', playlist);
  }
  this.setState({ removing: true });

  return playlist;
};

const select = (jPlaylist, { index }) => updateObject(jPlaylist, {
  index: (index < 0) ? jPlaylist.original.length + index : index,
});

// Negative index relates to end of array.
const play = (jPlaylist, { index }) => updateObject(jPlaylist, {
  index: (index < 0) ? jPlaylist.original.length + index : index,
  paused: false,
});

const pause = jPlaylist => updateObject(jPlaylist, {
  paused: true,
});

const next = jPlaylist => updateObject(jPlaylist, {
  index: jPlaylist.current + 1 < jPlaylist.playlist.length ? jPlaylist.current + 1 : 0,
});

const previous = jPlaylist => updateObject(jPlaylist, {
  index: jPlaylist.current - 1 >= 0 ? jPlaylist.current - 1 : jPlaylist.playlist.length - 1,
});

const shuffle = (jPlaylist, { shuffled, playNow }) => updateObject(jPlaylist, {
  shuffled: shuffled === undefined ? !jPlaylist.shuffled : shuffled,
  playNow,
});

const setPlaylist = (jPlaylist, { playlist }) => updateObject(jPlaylist, {
  playlist,
});

const jPlaylistReducer = (state, action) => {
  switch (action.type) {
    case actionNames.SET_PLAYLIST:
      return setPlaylist(state[action.id], action);
    case actionNames.ADD:
      return add(state[action.id], action);
    case actionNames.REMOVE:
      return remove(state[action.id], action);
    case actionNames.SELECT:
      return select(state[action.id], action);
    case actionNames.PLAY:
      return play(state[action.id], action);
    case actionNames.PAUSE:
      return pause(state[action.id], action);
    case actionNames.SHUFFLE:
      return shuffle(state[action.id], action);
    case actionNames.NEXT:
      return next(state[action.id], action);
    case actionNames.PREVIOUS:
      return previous(state[action.id], action);
    default:
      return state;
  }
};

export default jPlaylistReducer;
