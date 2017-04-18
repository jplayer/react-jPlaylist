import { connect } from 'react-redux';
import { actions as jPlayerActions } from 'react-jplayer';
import { connect as jPlayerConnect, jPlayerDefaultOptions } from 'react-jplayer-utils';

import * as jPlaylistActions from '../actions/actions';

const mapStateToProps = ({ jPlaylists }, { id, ...props }) => {
  const newJPlaylists = {};

  Object.keys(jPlaylists).forEach((jPlaylistKey) => {
    const jPlaylist = jPlaylists[jPlaylistKey];
    const options = {};

    Object.keys(jPlayerDefaultOptions).forEach((key) => {
      if (jPlaylist[key] !== undefined) {
        options[key] = jPlaylist[key];
      }
    });

    newJPlaylists[jPlaylistKey] = {
      options,
    };
  });

  const { [id]: jPlaylist, ...otherJPlaylists } = newJPlaylists;

  const returnedJPlaylists = {
    ...props,
    ...jPlaylist,
    id,
  };

  if (Object.keys(otherJPlaylists).some(otherJPlaylist => otherJPlaylist)) {
    returnedJPlaylists.jPlaylists = otherJPlaylists;
  }

  return returnedJPlaylists;
};

const mapDispatchToProps = {
  ...jPlayerActions,
  ...jPlaylistActions,
};

const Connect = (jPlaylist, options) => {
  const ConnectedPlaylist = connect(mapStateToProps, mapDispatchToProps)(jPlaylist);

  return jPlayerConnect(jPlaylist, options, ConnectedPlaylist);
};

export default Connect;
