import expect from 'expect';

import mockJPlaylistOptions from '../../util/mockData/mockJPlaylistOptions';
import { __get__ } from './posterContainer';

const mapStateToProps = __get__('mapStateToProps');

const id = 'jPlaylist-1';
const attributes = {
  'data-test': 'test',
};

describe('PosterContainer', () => {
  let jPlaylists;

  beforeEach(() => {
    jPlaylists = {
      [id]: mockJPlaylistOptions,
    };
  });

  it('mapStateToProps', () => {
    const index = 0;
    const stateProps = mapStateToProps({ jPlaylists }, {
      id,
      index,
      ...attributes,
    });

    expect(stateProps).toEqual({
      src: mockJPlaylistOptions.playlist[index].poster,
      attributes,
    });
  });
});
