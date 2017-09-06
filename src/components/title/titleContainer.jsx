import { TitleComponent } from 'react-jplayer';
import { connectWithIndex, formatArtistAndTitle } from 'react-jplayer-utils';

const mapStateToProps = ({ jPlaylists }, { id, index }) => ({
  title: formatArtistAndTitle(
    jPlaylists[id].playlist[index].artist,
    jPlaylists[id].playlist[index].title,
  ),
});

export default connectWithIndex(mapStateToProps)(TitleComponent);
