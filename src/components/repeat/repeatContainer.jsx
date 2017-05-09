import Repeat from 'react-jplayer/lib/components/repeat/repeat';

import { connectWithId } from 'react-jplayer-utils';
import { setOption } from '../../actions/actions';
import getLoopState from '../../util/getLoopState';

const mapStateToProps = ({ jPlaylists }, { id }) => ({
  loop: jPlaylists[id].loop,
});

export default connectWithId(mapStateToProps, {
  setLoop: (id, loop) => setOption(id, 'loop', getLoopState(loop)),
})(Repeat);
