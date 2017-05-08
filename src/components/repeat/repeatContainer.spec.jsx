import expect from 'expect';

import mockJPlaylistOptions from '../../util/mockData/mockJPlaylistOptions';
import { __get__ } from './repeatContainer';

const mapStateToProps = __get__('mapStateToProps');

const id = 'jPlaylist-1';

describe('RepeatContainer', () => {
  let jPlaylists;

  beforeEach(() => {
    jPlaylists = {
      [id]: mockJPlaylistOptions,
    };
  });

  it('mapStateToProps', () => {
    const stateProps = mapStateToProps({ jPlaylists }, { id });

    expect(stateProps).toEqual({
      loop: mockJPlaylistOptions.loop,
    });
  });
});
