import expect from 'expect';
import { classes as sharedClasses } from 'react-jplayer-utils';

import { classes } from '../../util/constants';
import mockJPlaylistOptions from '../../util/mockData/mockJPlaylistOptions';
import { __get__ } from './playlistContainer';
import setup from './playlist.spec';

const mapStateToProps = __get__('mapStateToProps');

const id = 'jPlaylist-1';

describe('PlaylistContainer', () => {
  let props;
  let jPlaylists;

  beforeEach(() => {
    jPlaylists = {
      [id]: mockJPlaylistOptions,
    };
  });

  it('mapStateToProps', () => {
    ({ props } = setup());

    props.attributes.className = 'custom-class';

    const stateProps = mapStateToProps({ jPlaylists }, {
      children: props.children,
      id,
      ...props.attributes,
    });

    expect(stateProps).toEqual({
      playlist: jPlaylists[id].playlist,
      children: props.children,
      attributes: {
        ...props.attributes,
        className: `${props.attributes.className} ${classes.PLAYLIST}`,
      },
    });
  });

  it('classname hidden is applied when hidePlaylist', () => {
    ({ props } = setup());

    jPlaylists[id].hidePlaylist = true;

    const stateProps = mapStateToProps({ jPlaylists }, {
      children: props.children,
      id,
      ...props.attributes,
    });

    expect(stateProps.attributes.className).toContain(`${sharedClasses.HIDDEN}`);
  });
});
