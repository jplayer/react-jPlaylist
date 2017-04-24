import { connectWithIndex } from 'react-jplayer-utils';
import { actions as jPlayerActions } from 'react-jplayer';

import { play } from '../../actions/actions';
import MediaLink from './mediaLink';

const mapStateToProps = ({ jPlaylists }, { index, id, children, ...attributes }) => ({
  current: jPlaylists[id].current,
  id,
  index,
  children,
  attributes,
});

const mapDispatchToProps = dispatch => ({
  onClick: (id, current, index) => {
    if (current !== index) {
      dispatch(play(id, index));
    } else {
      dispatch(jPlayerActions.play(id));
    }
  },
});

export default connectWithIndex(mapStateToProps, mapDispatchToProps)(MediaLink);
