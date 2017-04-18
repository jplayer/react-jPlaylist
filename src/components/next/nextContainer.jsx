import { connectWithId } from 'react-jplayer-utils';
import { next } from '../../actions/actions';
import Next from './next';

const mapStateToProps = ({ jPlaylists }, { id, children, ...attributes }) => ({
  id,
  children,
  attributes,
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(next(id)),
});

export default connectWithId(mapStateToProps, mapDispatchToProps)(Next);
