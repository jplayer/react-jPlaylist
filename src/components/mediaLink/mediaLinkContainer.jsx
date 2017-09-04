import { connectWithIndex } from 'react-jplayer-utils';
import { compose, withHandlers } from 'recompose';

import { play } from '../../actions/actions';
import MediaLink from './mediaLink';

const handlers = {
  play: props => () => {
    props.play(props.id, props.index);
  },
};

export default compose(
  connectWithIndex(null, {
    play,
  }),
  withHandlers(handlers),
)(MediaLink);
