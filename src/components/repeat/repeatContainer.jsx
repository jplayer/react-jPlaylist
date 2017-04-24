import Repeat from 'react-jplayer/src/components/repeat/repeat';

import { connectWithId } from 'react-jplayer-utils';
import { setOption } from '../../actions/actions';
import getLoopState from '../../util/getLoopState';

const mapStateToProps = ({ jPlaylists }, { id, children, ...attributes }) => ({
  loop: jPlaylists[id].loop,
  id,
  children,
  attributes,
});

const mapDispatchToProps = dispatch => ({
  onClick: (id, loop) => dispatch(setOption(id, 'loop', getLoopState(loop))),
});

export default connectWithId(mapStateToProps, mapDispatchToProps)(Repeat);
