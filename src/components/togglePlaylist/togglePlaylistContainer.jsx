import { connectWithId } from 'react-jplayer-utils';
import { setOption } from '../../actions/actions';
import TogglePlaylist from './togglePlaylist';

const mapStateToProps = ({ jPlaylists }, { id, children, ...attributes }) => ({
  hidePlaylist: jPlaylists[id].hidePlaylist,
  id,
  children,
  attributes,
});

const mapDispatchToProps = dispatch => ({
  onClick: (id, hidePlaylist) => dispatch(setOption(id, 'hidePlaylist', !hidePlaylist)),
});

export default connectWithId(mapStateToProps, mapDispatchToProps)(TogglePlaylist);
