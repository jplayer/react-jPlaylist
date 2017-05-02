import { connectWithId, classes as sharedClasses } from 'react-jplayer-utils';
import classNames from 'classnames';

import { classes } from '../../util/constants';
import Playlist from './playlist';

const mapStateToProps = ({ jPlaylists }, { id, children, ...attributes }) => ({
  playlist: jPlaylists[id].playlist,
  children,
  attributes: {
    ...attributes,
    className: classNames(attributes.className, classes.PLAYLIST, {
      [sharedClasses.HIDDEN]: jPlaylists[id].hidePlaylist,
    }),
  },
});

export default connectWithId(mapStateToProps)(Playlist);
