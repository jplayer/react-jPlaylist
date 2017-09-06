import { PosterComponent } from 'react-jplayer';
import { connectWithIndex } from 'react-jplayer-utils';

const mapStateToProps = ({ jPlaylists }, { id, index }) => ({
  src: jPlaylists[id].playlist[index].poster,
});

export default connectWithIndex(mapStateToProps)(PosterComponent);
