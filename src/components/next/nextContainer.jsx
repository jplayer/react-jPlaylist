import { connectWithId } from 'react-jplayer-utils';
import { next } from '../../actions/actions';
import Next from './next';

const mapStateToProps = ({ jPlaylists }, { id, children, ...attributes }) => ({
  id,
  children,
  attributes,
});

export default connectWithId(mapStateToProps, {
  next,
})(Next);
