import { connectWithId } from 'react-jplayer-utils';
import { previous } from '../../actions/actions';
import Previous from './previous';

const mapStateToProps = ({ jPlaylists }, { id, children, ...attributes }) => ({
  id,
  children,
  attributes,
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(previous(id)),
});

export default connectWithId(mapStateToProps, mapDispatchToProps)(Previous);
