import { connectWithIndex, formatArtistAndTitle } from 'react-jplayer-utils';
import Title from 'react-jplayer/lib/components/title/title';

const mapStateToProps = ({ jPlaylists }, { id, index }) => ({
  title: formatArtistAndTitle(
    jPlaylists[id].playlist[index].artist,
    jPlaylists[id].playlist[index].title,
  ),
});

export default connectWithIndex(mapStateToProps)(Title);
