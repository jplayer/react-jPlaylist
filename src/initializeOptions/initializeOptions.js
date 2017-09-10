import merge from 'lodash.merge';
import { initializeOptions } from 'react-jplayer';

import { defaultStatus, defaultOptions } from '../util/constants';

export const initialState = {};

const options = (jPlayerOptions, jPlaylistOptions) => {
  initialState[jPlayerOptions.id] = merge({}, defaultStatus,
    defaultOptions, jPlaylistOptions);

  if (Array.isArray(jPlaylistOptions.playlist)) {
    const media = jPlaylistOptions.playlist[0];

    return initializeOptions({
      ...jPlayerOptions,
      media,
    });
  }

  return initializeOptions(jPlayerOptions);
};

export default options;
