import { updateObject } from 'react-jplayer-utils';
import maxBy from 'lodash.maxby';
import shortid from 'shortid';

import { actionNames } from '../util/constants';

const add = (jPlaylist, { media, playNow }) => {
  const highestMediaShufflePosition = maxBy(jPlaylist.playlist, 'shufflePosition');
  const newMedia = {
    ...media,
    id: shortid.generate(),
    shufflePosition: highestMediaShufflePosition !== undefined ?
                      highestMediaShufflePosition.shufflePosition + 1 : 0,
  };
  const playlist = [
    ...jPlaylist.playlist,
    newMedia,
  ];
  let current;

  if (playNow) {
    current = playlist.length - 1;
  } else if (playlist.length === 1) {
    current = 0;
  }

  return updateObject(jPlaylist, {
    playlist,
    playNow,
    current,
  });
};

const remove = (jPlaylist, { index }) => {
  const playlist = [...jPlaylist.playlist];
  let current = jPlaylist.current;
  let shuffled = jPlaylist.shuffled;

  playlist.splice(index, 1);

  if (playlist.length) {
    if (index === jPlaylist.current) {
      // To cope when last element being selected when it was removed
      current = (index < playlist.length) ? jPlaylist.current
        : playlist.length - 1;
    } else if (index < jPlaylist.current) {
      current -= 1;
    }
  } else {
    shuffled = false;
  }

  return updateObject(jPlaylist, {
    playlist,
    current,
    shuffled,
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
  playNow: true,
});

const shuffle = (jPlaylist, { shuffled = !jPlaylist.shuffled, playNow }) => {
  let playlist;

  if (shuffled) {
    playlist = [...jPlaylist.playlist].sort(() => 0.5 - Math.random());
  } else {
    playlist = [...jPlaylist.playlist].sort((a, b) => (
        a.shufflePosition - b.shufflePosition));
  }

  return updateObject(jPlaylist, {
    playlist,
    shuffled,
    playNow,
  });
};

const next = (jPlaylist) => {
  const current = jPlaylist.loop === 'loop-playlist' ? 0 : jPlaylist.current;
  const isWithinPlaylist = jPlaylist.current + 1 < jPlaylist.playlist.length;
  let playNow = true;

  if (!isWithinPlaylist && jPlaylist.loop === 'off') {
    playNow = false;
  }

  return updateObject(jPlaylist, {
    current: isWithinPlaylist ? jPlaylist.current + 1 : current,
    playNow,
  });
};

const previous = (jPlaylist) => {
  let current = jPlaylist.loopOnPrevious ? jPlaylist.playlist.length - 1
    : jPlaylist.current;

  if (jPlaylist.current - 1 >= 0) {
    current = jPlaylist.current - 1;
  }

  return updateObject(jPlaylist, {
    current,
    playNow: true,
  });
};

const setPlaylist = (jPlaylist, { playlist }) => updateObject(jPlaylist, {
  current: 0,
  shuffled: false,
  playlist: playlist.map((media, index) => ({
    ...media,
    id: shortid.generate(),
    shufflePosition: index,
  })),
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
