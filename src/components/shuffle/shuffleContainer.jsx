import { connectWithId } from 'react-jplayer-utils';
import { compose, withHandlers } from 'recompose';

import { shuffle } from '../../actions/actions';
import Shuffle from './shuffle';

const handlers = {
  shuffle: props => () => props.shuffle(props.id, undefined, true),
};

export default compose(
  connectWithId(null, {
    shuffle,
  }),
  withHandlers(handlers),
)(Shuffle);
