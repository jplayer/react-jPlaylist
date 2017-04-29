const actionNames = {
  SET_PLAYLIST: 'SET_PLAYLIST',
  SET_OPTION: 'SET_OPTION',
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  CLEAR: 'CLEAR',
  SELECT: 'SELECT',
  PLAY: 'PLAY',
  SHUFFLE: 'SHUFFLE',
  NEXT: 'NEXT',
  PREVIOUS: 'PREVIOUS',
};

const playlistActionNames = {};

Object.keys(actionNames).forEach((key) => {
  playlistActionNames[key] = `PLAYLIST_${actionNames[key]}`;
});

export default playlistActionNames;
