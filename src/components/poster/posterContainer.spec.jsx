import expect from 'expect';

import mockJPlaylist from '../../util/mockData/mockJPlaylist';
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
      [id]: mockJPlaylist,
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
      src: mockJPlaylist.playlist[index].poster,
      attributes,
    });
  });
});
