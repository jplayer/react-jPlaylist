import { connectWithId, passWithIndex } from 'react-jplayer-utils';

import PlaylistItem from './playlistItem';

const mapStateToProps = ({ jPlayers, jPlaylists }, { id, index }) => ({
  isCurrent: jPlaylists[id].current === index,
});

export default connectWithId(mapStateToProps)(passWithIndex(PlaylistItem));
