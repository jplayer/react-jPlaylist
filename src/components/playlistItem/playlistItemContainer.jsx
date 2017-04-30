import { connectWithId, passWithIndex } from 'react-jplayer-utils';

import PlaylistItem from './playlistItem';

const mapStateToProps = ({ jPlaylists }, { id, index, ...attributes }) => ({
  isCurrent: jPlaylists[id].current === index,
  attributes,
});

export default connectWithId(mapStateToProps)(passWithIndex(PlaylistItem));
