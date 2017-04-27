import { connectWithId } from 'react-jplayer-utils';
import { previous } from '../../actions/actions';
import Previous from './previous';

const mapStateToProps = ({ jPlaylists }, { id, children, ...attributes }) => ({
  id,
  children,
  attributes,
});

export default connectWithId(mapStateToProps, {
  previous,
})(Previous);
