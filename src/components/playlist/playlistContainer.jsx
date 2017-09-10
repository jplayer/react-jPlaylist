import { connectWithId, classes as sharedClasses } from 'react-jplayer-utils';
import classNames from 'classnames';

import { classes } from '../../util/constants';
import Playlist from './playlist';

const mapStateToProps = ({ jPlaylists }, { id, className }) => ({
  playlist: jPlaylists[id].playlist,
  className: classNames(className, classes.PLAYLIST, {
    [sharedClasses.HIDDEN]: jPlaylists[id].hidePlaylist,
  }),
});

export default connectWithId(mapStateToProps)(Playlist);
