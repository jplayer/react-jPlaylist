export const actionNames = {
  SET_PLAYLIST: 'JPLAYLIST_SET_PLAYLIST',
  SET_OPTION: 'JPLAYLIST_SET_PLAYLIST_OPTION',
  ADD: 'JPLAYLIST_ADD',
  REMOVE: 'JPLAYLIST_REMOVE',
  CLEAR: 'JPLAYLIST_CLEAR',
  SELECT: 'JPLAYLIST_SELECT',
  PLAY: 'JPLAYLIST_PLAY',
  SHUFFLE: 'JPLAYLIST_SHUFFLE',
  NEXT: 'JPLAYLIST_NEXT',
  PREVIOUS: 'JPLAYLIST_PREVIOUS',
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

export const defaultStatus = {
  current: 0,
  shuffled: false,
};

export const defaultOptions = {
  loopOnPrevious: true,
  shuffleOnLoop: true,
  loop: 'loop-playlist',
  hidePlaylist: false,
  playlist: [],
};
