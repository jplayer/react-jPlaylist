import { connectWithId } from 'react-jplayer-utils';
import { setOption } from '../../actions/actions';
import TogglePlaylist from './togglePlaylist';

const mapStateToProps = ({ jPlaylists }, { id }) => ({
  hidePlaylist: jPlaylists[id].hidePlaylist,
});

export default connectWithId(mapStateToProps, {
  togglePlaylist: (id, hidePlaylist) => setOption(id, 'hidePlaylist', hidePlaylist),
})(TogglePlaylist);
