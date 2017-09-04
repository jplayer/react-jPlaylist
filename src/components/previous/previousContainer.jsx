import { connectWithId } from 'react-jplayer-utils';
import { compose, withHandlers } from 'recompose';

import { previous } from '../../actions/actions';
import Previous from './previous';

const handlers = {
  previous: props => () => props.previous(props.id),
};

export default compose(
  connectWithId(null, {
    previous,
  }),
  withHandlers(handlers),
)(Previous);
