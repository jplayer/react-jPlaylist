import { connectWithId } from 'react-jplayer-utils';
import merge from 'lodash.merge';

import KeyControl from './keyControl';
import { setOption, next, previous, shuffle } from '../../../actions/actions';
import getLoopState from '../../../util/getLoopState';

const mapStateToProps = ({ jPlaylists }, { id }) => ({
  loop: jPlaylists[id].loop,
});

const mergeProps = (stateProps, { dispatch }, { keyBindings, children, id }) => ({
  keyBindings: merge({
    next: {
      key: 221, // ]
      fn: () => dispatch(next(id)),
    },
    previous: {
      key: 219, // [
      fn: () => dispatch(previous(id)),
    },
    shuffle: {
      key: 83, // s
      fn: () => dispatch(shuffle(id, undefined, true)),
    },
    loop: {
      key: 76, // l
      fn: () => {
        const loop = getLoopState(stateProps.loop);

        dispatch(setOption(id, 'loop', loop));
      },
    },
  }, keyBindings),
  children,
});

export default connectWithId(mapStateToProps, null, mergeProps)(KeyControl);
