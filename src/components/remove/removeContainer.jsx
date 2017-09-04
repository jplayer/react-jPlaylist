import { connectWithIndex } from 'react-jplayer-utils';
import { compose, withHandlers } from 'recompose';

import { remove } from '../../actions/actions';
import Remove from './remove';

const handlers = {
  remove: props => () => props.remove(props.id, props.index),
};

export default compose(
  connectWithIndex(null, {
    remove,
  }),
  withHandlers(handlers),
)(Remove);
