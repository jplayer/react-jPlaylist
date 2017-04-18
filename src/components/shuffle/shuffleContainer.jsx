import { connectWithId } from 'react-jplayer-utils';
import { shuffle } from '../../actions/actions';
import Shuffle from './shuffle';

const mapStateToProps = ({ jPlaylists }, { id, children, ...attributes }) => ({
  id,
  children,
  attributes,
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(shuffle(id)),
});

export default connectWithId(mapStateToProps, mapDispatchToProps)(Shuffle);
