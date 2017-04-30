import expect from 'expect';

import mockJPlaylist from '../../util/mockData/mockJPlaylist';
import { __get__ } from './repeatContainer';

const mapStateToProps = __get__('mapStateToProps');

const id = 'jPlaylist-1';
const attributes = {
  'data-test': 'test',
};
const children = 'test';

describe('RepeatContainer', () => {
  let jPlaylists;

  beforeEach(() => {
    jPlaylists = {
      [id]: mockJPlaylist,
    };
  });

  it('mapStateToProps', () => {
    const stateProps = mapStateToProps({ jPlaylists }, {
      id,
      children,
      ...attributes,
    });

    expect(stateProps).toEqual({
      loop: mockJPlaylist.loop,
      id,
      children,
      attributes,
    });
  });
});
