import React from 'react';
import { Motion, spring } from 'react-motion';

import Playlist from './playlist';

const PlaylistContainer = (props) => {
  const animationHeight = props.shuffling ? props.minHeight : props.maxHeight;

  return (
    <Motion
      style={{ heightToInterpTo: spring(animationHeight, props.config) }}
      onRest={props.onRest}
    >
      {values =>
        <Playlist height={values.heightToInterpTo}>
          {props.children}
        </Playlist>
      }
    </Motion>
  );
};

PlaylistContainer.defaultProps = {
  minHeight: 0,
  maxHeight: 1,
};

PlaylistContainer.propTypes = {
  children: React.PropTypes.element.isRequired,
  shuffling: React.PropTypes.bool.isRequired,
  minHeight: React.PropTypes.number,
  maxHeight: React.PropTypes.number,
  config: React.PropTypes.object.isRequired,
  onRest: React.PropTypes.func.isRequired,
};

export default Playlist;
