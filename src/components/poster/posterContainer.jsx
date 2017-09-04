import { connectWithIndex } from 'react-jplayer-utils';
import Poster from 'react-jplayer/lib/components/poster/poster';

const mapStateToProps = ({ jPlaylists }, { id, index }) => ({
  src: jPlaylists[id].playlist[index].poster,
});

export default connectWithIndex(mapStateToProps)(Poster);
