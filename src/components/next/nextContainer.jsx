import { connectWithId } from 'react-jplayer-utils';
import { next } from '../../actions/actions';
import Next from './next';

export default connectWithId(null, {
  next,
})(Next);
