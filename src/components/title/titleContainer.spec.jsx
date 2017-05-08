import expect from 'expect';

import mockJPlaylistOptions from '../../util/mockData/mockJPlaylistOptions';
import { __get__ } from './titleContainer';

const mapStateToProps = __get__('mapStateToProps');

const id = 'jPlaylist-1';
const attributes = {
  'data-test': 'test',
};
const children = 'test';
const index = 0;

describe('Titleontainer', () => {
  let jPlaylists;

  beforeEach(() => {
    jPlaylists = {
      [id]: mockJPlaylistOptions,
    };
  });

  it('mapStateToProps', () => {
    const stateProps = mapStateToProps({ jPlaylists }, {
      id,
      index,
      children,
      ...attributes,
    });

    expect(stateProps).toEqual({
      children,
      attributes,
    });
  });

  it('children is artist and title when not specified', () => {
    const stateProps = mapStateToProps({ jPlaylists }, {
      id,
      index,
    });
    const media = mockJPlaylistOptions.playlist[0];

    expect(stateProps.children).toBe(`${media.artist} - ${media.title}`);
  });

  it('children is artist when title and children are not specified', () => {
    jPlaylists[id].playlist[0].title = '';

    const stateProps = mapStateToProps({ jPlaylists }, {
      id,
      index,
    });
    const media = mockJPlaylistOptions.playlist[0];

    expect(stateProps.children).toBe(`${media.artist}`);
  });

  it('children is title when artist and children are not specified', () => {
    jPlaylists[id].playlist[0].artist = '';

    const stateProps = mapStateToProps({ jPlaylists }, {
      id,
      index,
    });
    const media = mockJPlaylistOptions.playlist[0];

    expect(stateProps.children).toBe(`${media.title}`);
  });
});
