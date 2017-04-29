import { connectWithIndex } from 'react-jplayer-utils';

import { play } from '../../actions/actions';
import MediaLink from './mediaLink';

const mapStateToProps = ({ jPlaylists }, { id, index, children, ...attributes }) => ({
  id,
  index,
  children,
  attributes,
});

const mapDispatchToProps = dispatch => ({
  play: (id, index) => dispatch(play(id, index)),
});

export default connectWithIndex(mapStateToProps, mapDispatchToProps)(MediaLink);
