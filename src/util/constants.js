export const actionNames = {
  SET_PLAYLIST: 'SET_PLAYLIST',
  SET_OPTION: 'SET_PLAYLIST_OPTION',
  ADD: 'PLAYLIST_ADD',
  REMOVE: 'PLAYLIST_REMOVE',
  CLEAR: 'PLAYLIST_CLEAR',
  SELECT: 'PLAYLIST_SELECT',
  PLAY: 'PLAYLIST_PLAY',
  SHUFFLE: 'PLAYLIST_SHUFFLE',
  NEXT: 'PLAYLIST_NEXT',
  PREVIOUS: 'PLAYLIST_PREVIOUS',
};

export const classes = {
  SHUFFLE: 'jp-shuffle',
  PREVIOUS: 'jp-previous',
  NEXT: 'jp-next',
  TOGGLE_PLAYLIST: 'jp-toggle-playlist',
  PLAYLIST: 'jp-playlist',
  REMOVE: 'jp-remove',
  MEDIA_LINK: 'jp-media-link',
  CURRENT: 'jp-current',
  states: {
    LOOPED_PLAYLIST: 'jp-state-looped-playlist',
    SHUFFLED: 'jp-state-shuffled',
  },
};

export const defaultOptions = {
  loopOnPrevious: true,
  shuffleOnLoop: true,
  loop: 'loop-playlist',
  hidePlaylist: false,
};

export const defaultStatus = {
  current: 0,
  shuffled: false,
};
