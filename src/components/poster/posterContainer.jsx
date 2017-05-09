import { connectWithIndex } from 'react-jplayer-utils';
import Poster from 'react-jplayer/lib/components/poster/poster';

const mapStateToProps = ({ jPlaylists }, { id, index, ...attributes }) => ({
  src: jPlaylists[id].playlist[index].poster,
  attributes,
});

export default connectWithIndex(mapStateToProps)(Poster);
