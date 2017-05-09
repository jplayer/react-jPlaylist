import { connectWithIndex, formatArtistAndTitle } from 'react-jplayer-utils';
import Title from 'react-jplayer/lib/components/title/title';

const mapStateToProps = ({ jPlaylists }, { id, index, children, ...attributes }) => ({
  children: children || formatArtistAndTitle(
    jPlaylists[id].playlist[index].artist,
    jPlaylists[id].playlist[index].title,
  ),
  attributes,
});

export default connectWithIndex(mapStateToProps)(Title);
