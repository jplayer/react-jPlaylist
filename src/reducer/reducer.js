import { updateObject } from 'react-jplayer-utils';
import maxBy from 'lodash.maxby';
import { initialState } from '../initializeOptions/initializeOptions';
import { actionNames } from '../util/constants';

const setOption = ({ key, value }) => ({
  [key]: value,
});

const setPlaylist = ({ playlist }) => ({
  current: 0,
  shuffled: false,
  playlist: playlist.map((media, index) => ({
    ...media,
    shufflePosition: index,
  })),
});

const add = (jPlaylist, { media, playNow }) => {
  const highestMediaShufflePosition = maxBy(jPlaylist.playlist, 'shufflePosition');
  const newMedia = {
    ...media,
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

  return {
    playlist,
    playNow,
    current,
  };
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

const clear = () => ({
  playlist: [],
});

// Negative index relates to the end of the array
const select = (jPlaylist, { index }) => ({
  current: (index < 0) ? jPlaylist.original.length + index : index,
});

// Negative index relates to the end of the array
const play = (jPlaylist, { index = jPlaylist.current }) => ({
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

  return {
    playlist,
    shuffled,
    playNow,
  };
};

const next = (jPlaylist) => {
  const current = jPlaylist.loop === 'loop-playlist' ? 0 : jPlaylist.current;
  const isWithinPlaylist = jPlaylist.current + 1 < jPlaylist.playlist.length;
  let playNow = true;

  if (!isWithinPlaylist && jPlaylist.loop === 'off') {
    playNow = false;
  }

  return {
    current: isWithinPlaylist ? jPlaylist.current + 1 : current,
    playNow,
  };
};

const previous = (jPlaylist) => {
  let current = jPlaylist.loopOnPrevious ? jPlaylist.playlist.length - 1
    : jPlaylist.current;

  if (jPlaylist.current - 1 >= 0) {
    current = jPlaylist.current - 1;
  }

  return {
    current,
    playNow: true,
  };
};

const updateJPlaylist = (state, action, value) => {
  const jPlaylist = state[action.id];

  return {
    ...state,
    [action.id]: {
      ...jPlaylist,
      ...value,
    },
  };
};

const reducer = (state = initialState, action) => {
  const updateValue = value => updateJPlaylist(state, action, value);

  switch (action.type) {
    case actionNames.SET_OPTION:
      return updateValue(setOption(action));
    case actionNames.SET_PLAYLIST:
      return updateValue(setPlaylist(action));
    case actionNames.ADD:
      return updateValue(add(state[action.id], action));
    case actionNames.REMOVE:
      return updateValue(remove(state[action.id], action));
    case actionNames.CLEAR:
      return updateValue(clear());
    case actionNames.SELECT:
      return updateValue(select(state[action.id], action));
    case actionNames.PLAY:
      return updateValue(play(state[action.id], action));
    case actionNames.SHUFFLE:
      return updateValue(shuffle(state[action.id], action));
    case actionNames.NEXT:
      return updateValue(next(state[action.id]));
    case actionNames.PREVIOUS:
      return updateValue(previous(state[action.id]));
    default:
      return state;
  }
};

export default reducer;
