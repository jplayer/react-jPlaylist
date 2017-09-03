import merge from 'lodash.merge';
import { initializeOptions } from 'react-jplayer';

import { defaultStatus, defaultOptions } from '../util/constants';

export const initialState = {};

const options = (jPlayerOptions, jPlaylistOptions) => {
  initialState[jPlayerOptions.id] = merge({}, defaultStatus,
    defaultOptions, jPlaylistOptions);

  initializeOptions(jPlayerOptions);
};

export default options;
