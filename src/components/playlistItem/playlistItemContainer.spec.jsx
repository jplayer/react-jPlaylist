import expect from 'expect';

import mockJPlaylistOptions from '../../util/mockData/mockJPlaylistOptions';
import { __get__ } from './playlistItemContainer';
import setup from './playlistItem.spec';

const mapStateToProps = __get__('mapStateToProps');

const id = 'jPlaylist-1';

describe('PlaylistItemContainer', () => {
  let props;
  let jPlaylists;

  beforeEach(() => {
    jPlaylists = {
      [id]: mockJPlaylistOptions,
    };
  });

  it('mapStateToProps', () => {
    ({ props } = setup());

    const stateProps = mapStateToProps({ jPlaylists }, {
      id,
      index: 0,
      ...props.attributes,
    });

    expect(stateProps).toEqual({
      isCurrent: true,
      attributes: props.attributes,
    });
  });

  it('isCurrent is false when index doen\'t equal current', () => {
    ({ props } = setup());

    const stateProps = mapStateToProps({ jPlaylists }, {
      id,
      index: 10,
    });

    expect(stateProps.isCurrent).toBe(false);
  });
});
