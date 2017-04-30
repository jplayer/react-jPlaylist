import expect from 'expect';

import mockJPlaylist from '../../util/mockData/mockJPlaylist';
import { __get__ } from './togglePlaylistContainer';

const mapStateToProps = __get__('mapStateToProps');

const id = 'jPlaylist-1';

describe('RepeatContainer', () => {
  let jPlaylists;

  beforeEach(() => {
    jPlaylists = {
      [id]: mockJPlaylist,
    };
  });

  it('mapStateToProps', () => {
    const stateProps = mapStateToProps({ jPlaylists }, { id });

    expect(stateProps).toEqual({
      hidePlaylist: mockJPlaylist.hidePlaylist,
    });
  });
});
