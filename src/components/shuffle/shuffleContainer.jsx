import { connectWithId } from 'react-jplayer-utils';
import { shuffle } from '../../actions/actions';
import Shuffle from './shuffle';

const mapStateToProps = ({ jPlaylists }, { id, children, ...attributes }) => ({
  id,
  children,
  attributes,
});

export default connectWithId(mapStateToProps, {
  shuffle,
})(Shuffle);
