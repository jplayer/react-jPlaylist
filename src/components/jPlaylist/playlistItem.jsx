import React from 'react';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';
import { actions as jPlayerActions } from 'react-jplayer';

import { play } from '../../actions/actions';

const currentMedia = 'jp-playlist-current';

class PlaylistItemContainer extends React.Component {
  static get propTypes() {
    return {
      dispatch: React.PropTypes.func.isRequired,
      remove: React.PropTypes.func.isRequired,
      blur: React.PropTypes.func.isRequired,
      id: React.PropTypes.number.isRequired,
      current: React.PropTypes.number.isRequired,
      status: React.PropTypes.object.isRequired,
    };
  }
  static get defaultProps() {
    return {
      minHeight: 0,
      maxHeight: 1,
    };
  }
  onRemoveMediaClick = (index, e) => {
    e.preventDefault();

    this.props.remove(index);
    this.props.blur(e.target);
  }
  onMediaLinkClick = (index, e) => {
    e.preventDefault();

    if (this.props.current !== index) {
      this.props.dispatch(play(index));
    } else {
      this.props.dispatch(jPlayerActions.setOption(this.props.id, 'status', {
        ...this.props.status,
        paused: false,
      }));
    }

    this.props.blur(e.target);
  }
  render() {
    return (
      <div>
        {/* {this.props.medias.map((media, index) => {
          const animationHeight = media.isRemoving ? this.props.minHeight : this.props.maxHeight;
          const mediaListClass = this.props.current === index ? currentMedia : null;
          const mediaLinkClass = this.props.current === index ? `${this.props.itemClass} ${currentMedia}` : this.props.itemClass;
          const onRest = media.isRemoving ? () => this.props.onRest(index) : null;

          return (<Motion key={media.key} defaultStyle={{ heightToInterpTo: this.props.minHeight }} style={{ heightToInterpTo: spring(animationHeight, this.props.config) }} onRest={onRest}>
            {values =>
              <li className={mediaListClass} style={{ transform: `scaleY(${values.heightToInterpTo})`, transformOrigin: '50% top' }}>
                {this.props.enableRemoveControls && <a href="javascript:;" className={this.props.removeItemClass} onClick={this._onRemoveMediaClick.bind(this, index)}>&times;</a>}
                {media.free && <span className={this.props.freeGroupClass}>({media.freeMediaLinks})</span>}
                <a href="javascript:;" className={mediaLinkClass} onClick={this._onMediaLinkClick.bind(this, index)} tabIndex="0">
                  <img src={media.poster} />
                  {media.title}
                  {media.artist && <span className="jp-artist">by {media.artist}</span>}
                </a>
              </li>
                        }
          </Motion>);
        },
            )}*/}
      </div>
    );
  }
}

export default connect()(PlaylistItemContainer);
