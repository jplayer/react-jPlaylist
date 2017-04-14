import React from 'react';
import { connect } from 'react-redux';
import { actions as jPlayerActions } from 'react-jplayer';

import * as jPlaylistActions from '../actions/actions';
import defaultOptions from '../util/defaultOptions';

const mapStateToProps = ({ jPlaylists }, { id, ...props }) => {
  const newJPlaylists = {};

  Object.keys(jPlaylists).forEach((jPlaylistKey) => {
    const jPlaylist = jPlaylists[jPlaylistKey];
    const options = {};

    Object.keys(defaultOptions).forEach((key) => {
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

  return class ConnectedJPlaylist extends React.Component {
    static get jPlaylist() {
      return jPlaylist;
    }
    static get options() {
      return options;
    }
    static get childContextTypes() {
      return {
        id: React.PropTypes.string,
      };
    }
    getChildContext = () => ({
      id: options.id,
    });
    render() {
      return <ConnectedPlaylist id={options.id} {...this.props} />;
    }
  };
};

export default Connect;
