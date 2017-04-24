import { connectWithIndex } from 'react-jplayer-utils';
import { remove } from '../../actions/actions';
import Remove from './remove';

const mapStateToProps = ({ jPlaylists }, { id, index, ...attributes }) => ({
  id,
  index,
  attributes,
});

const mapDispatchToProps = dispatch => ({
  onClick: (id, index) => dispatch(remove(id, index)),
});

export default connectWithIndex(mapStateToProps, mapDispatchToProps)(Remove);
