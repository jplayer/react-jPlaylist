import { RepeatComponent } from 'react-jplayer';
import { connectWithId } from 'react-jplayer-utils';
import { compose, withHandlers } from 'recompose';

import { setOption } from '../../actions/actions';
import getLoopState from '../../util/loop/getLoopState';

const mapStateToProps = ({ jPlaylists }, { id }) => ({
  loop: jPlaylists[id].loop,
});

const handlers = {
  loop: props => () => props.setOption(props.id, 'loop', getLoopState(props.loop)),
};

export default compose(
  connectWithId(mapStateToProps, {
    setOption,
  }),
  withHandlers(handlers),
)(RepeatComponent);
