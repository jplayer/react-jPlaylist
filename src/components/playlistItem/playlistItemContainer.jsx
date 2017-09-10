import PropTypes from 'prop-types';
import { connectWithId } from 'react-jplayer-utils';
import { compose, withContext } from 'recompose';
import classNames from 'classnames';

import PlaylistItem from './playlistItem';
import { classes } from '../../util/constants';

const mapStateToProps = ({ jPlaylists }, { id, index }) => ({
  className: classNames({
    [classes.CURRENT]: jPlaylists[id].current === index,
  }),
});

export default compose(
  withContext(
    { index: PropTypes.number },
    ({ index }) => ({ index }),
  ),
  connectWithId(mapStateToProps),
)(PlaylistItem);
