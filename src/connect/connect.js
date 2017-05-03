import { connect } from 'react-redux';
import { actions as jPlayerActions } from 'react-jplayer';
import { connect as jPlayerConnect } from 'react-jplayer-utils';

import * as jPlaylistActions from '../actions/actions';

const Connect = (jPlaylist, options, playlistOptions) => {
  const ConnectedPlaylist = connect(state => state, {
    ...jPlayerActions,
    ...jPlaylistActions,
  })(jPlaylist);

  return jPlayerConnect(jPlaylist, { options, playlistOptions }, ConnectedPlaylist);
};

export default Connect;
