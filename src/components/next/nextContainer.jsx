import { connectWithId } from 'react-jplayer-utils';
import { compose, withHandlers } from 'recompose';

import { next } from '../../actions/actions';
import Next from './next';

const handlers = {
  next: props => () => props.next(props.id),
};

export default compose(
  connectWithId(null, {
    next,
  }),
  withHandlers(handlers),
)(Next);
