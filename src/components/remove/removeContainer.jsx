import { connectWithIndex } from 'react-jplayer-utils';
import { remove } from '../../actions/actions';
import Remove from './remove';

const mapStateToProps = ({ jPlaylists }, { id, index, ...attributes }) => ({
  id,
  index,
  attributes,
});

export default connectWithIndex(mapStateToProps, {
  remove,
})(Remove);
