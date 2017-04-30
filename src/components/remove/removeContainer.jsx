import { connectWithIndex } from 'react-jplayer-utils';
import { remove } from '../../actions/actions';
import Remove from './remove';

export default connectWithIndex(null, {
  remove,
})(Remove);
