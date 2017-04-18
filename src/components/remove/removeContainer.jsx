import { connectWithIndex } from 'react-jplayer-utils';
import { remove } from '../../actions/actions';
import Remove from './remove';

const mapStateToProps = ({ jPlaylists }, { id, index, ...attributes }) => ({
  index,
  attributes,
});

const mergeProps = ({ index, ...stateProps }, { dispatch }, { id }) => ({
  onClick: () => dispatch(remove(id, index)),
  ...stateProps,
});

export default connectWithIndex(mapStateToProps, null, mergeProps)(Remove);
