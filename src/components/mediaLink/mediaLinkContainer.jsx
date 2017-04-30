import { connectWithIndex } from 'react-jplayer-utils';

import { play } from '../../actions/actions';
import MediaLink from './mediaLink';

export default connectWithIndex(null, {
  play,
})(MediaLink);
