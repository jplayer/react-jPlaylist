import { connectWithIndex } from 'react-jplayer-utils';
import { actions as jPlayerActions } from 'react-jplayer';

import { play } from '../../actions/actions';
import MediaLink from './mediaLink';

const mapStateToProps = ({ jPlaylists }, { index, id, children, ...attributes }) => ({
  current: jPlaylists[id].current,
  index,
  children,
  attributes,
});

const mergeProps = ({ current, index, ...stateProps }, { dispatch }, { id }) => ({
  onClick: () => {
    if (current !== index) {
      dispatch(play(id, index));
    } else {
      dispatch(jPlayerActions.play(id));
    }
  },
  ...stateProps,
});

export default connectWithIndex(mapStateToProps, null, mergeProps)(MediaLink);
