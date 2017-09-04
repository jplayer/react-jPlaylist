import { connectWithId } from 'react-jplayer-utils';
import { compose, withHandlers } from 'recompose';

import TogglePlaylist from './togglePlaylist';
import { setOption } from '../../actions/actions';

const mapStateToProps = ({ jPlaylists }, { id }) => ({
  hidePlaylist: jPlaylists[id].hidePlaylist,
});

const handlers = {
  togglePlaylist: props => () => props.setOption(props.id, 'hidePlaylist', !props.hidePlaylist),
};

export default compose(
  connectWithId(mapStateToProps, {
    setOption,
  }),
  withHandlers(handlers),
)(TogglePlaylist);
