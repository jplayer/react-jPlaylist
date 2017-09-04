import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { createStore, combineReducers } from 'redux';
import { reducer as jPlayerReducer } from 'react-jplayer';

import jPlaylistReducer from '../../reducer/reducer';

export default (Container, jPlaylists, jPlayers, props) => {
  const state = {
    jPlayers,
    jPlaylists,
  };

  const store = createStore(combineReducers({
    jPlayers: jPlayerReducer,
    jPlaylists: jPlaylistReducer,
  }), state);

  const wrapper = mount(
    <Provider store={store}>
      <Container {...props} />
    </Provider>, {
      context: {
        id: 'TestPlayer',
        index: 0,
      },
      childContextTypes: {
        id: PropTypes.string,
        index: PropTypes.number,
      },
    },
  );

  return {
    wrapper,
    props,
    store,
  };
};
