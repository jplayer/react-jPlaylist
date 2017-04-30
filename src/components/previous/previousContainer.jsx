import { connectWithId } from 'react-jplayer-utils';
import { previous } from '../../actions/actions';
import Previous from './previous';

export default connectWithId(null, {
  previous,
})(Previous);
