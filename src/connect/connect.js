import { connect } from 'react-redux';
import { actions as jPlayerActions } from 'react-jplayer';
import { connect as jPlayerConnect } from 'react-jplayer-utils';
import getConnectedJPlayers from 'react-jplayer/src/util/getConnectedJPlayers';
import merge from 'lodash.merge';

import * as jPlaylistActions from '../actions/actions';
import getConnectedJPlaylists from '../util/getConnectedJPlaylists';

const mapStateToProps = ({ jPlayers, jPlaylists }, { id, ...props }) => {
  const newJPlaylists = merge({},
    getConnectedJPlayers(jPlayers),
    getConnectedJPlaylists(jPlaylists),
  );
  const { [id]: jPlaylist, ...otherJPlayers } = newJPlaylists;

  const returnedJPlaylist = {
    ...props,
    ...jPlaylist,
    id,
  };

  if (Object.keys(otherJPlayers).some(otherJPlayer => otherJPlayer)) {
    returnedJPlaylist.jPlayers = otherJPlayers;
  }

  return returnedJPlaylist;
};

const mapDispatchToProps = {
  ...jPlayerActions,
  ...jPlaylistActions,
};

const Connect = (jPlaylist, options, playlistOptions) => {
  const ConnectedPlaylist = connect(mapStateToProps, mapDispatchToProps)(jPlaylist);

  return jPlayerConnect(jPlaylist, { options, playlistOptions }, ConnectedPlaylist);
};

export default Connect;
