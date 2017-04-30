import { connectWithId } from 'react-jplayer-utils';
import { shuffle } from '../../actions/actions';
import Shuffle from './shuffle';

export default connectWithId(null, {
  shuffle,
})(Shuffle);
