import { initialState, jPlaylistDefaultOptions } from 'react-jplayer-utils';

export default connectedJPlayers =>
  initialState(connectedJPlayers, jPlaylistDefaultOptions);
