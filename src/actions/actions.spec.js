import expect from 'expect';

import * as actions from './actions';
import { actionNames } from '../util/constants';

describe('jPlaylist actions', () => {
  const id = 'jPlaylist-1';

  it('handles setOption', () => {
    const key = 'loopOnPrevious';
    const value = true;

    const expectedAction = {
      type: actionNames.SET_OPTION,
      id,
      key,
      value,
    };

    expect(actions.setOption(id, key, value)).toEqual(expectedAction);
  });

  it('handles setPlaylist', () => {
    const playlist = [{ mp3: 'test.mp3' }];
    const expectedAction = {
      type: actionNames.SET_PLAYLIST,
      id,
      playlist,
    };

    expect(actions.setPlaylist(id, playlist)).toEqual(expectedAction);
  });

  it('handles add', () => {
    const media = { mp3: 'test.mp3' };
    const playNow = true;

    const expectedAction = {
      type: actionNames.ADD,
      id,
      media,
      playNow,
    };

    expect(actions.add(id, media, playNow)).toEqual(expectedAction);
  });

  it('handles remove', () => {
    const index = 1;
    const expectedAction = {
      type: actionNames.REMOVE,
      id,
      index,
    };

    expect(actions.remove(id, index)).toEqual(expectedAction);
  });

  it('handles clear', () => {
    const expectedAction = {
      type: actionNames.CLEAR,
      id,
    };

    expect(actions.clear(id)).toEqual(expectedAction);
  });

  it('handles select', () => {
    const index = 1;
    const expectedAction = {
      type: actionNames.SELECT,
      id,
      index,
    };

    expect(actions.select(id, index)).toEqual(expectedAction);
  });

  it('handles play', () => {
    const index = 1;
    const expectedAction = {
      type: actionNames.PLAY,
      id,
      index,
    };

    expect(actions.play(id, index)).toEqual(expectedAction);
  });

  it('handles shuffle', () => {
    const shuffled = true;
    const playNow = true;

    const expectedAction = {
      type: actionNames.SHUFFLE,
      id,
      shuffled,
      playNow,
    };

    expect(actions.shuffle(id, shuffled, playNow)).toEqual(expectedAction);
  });

  it('handles next', () => {
    const expectedAction = {
      type: actionNames.NEXT,
      id,
    };

    expect(actions.next(id)).toEqual(expectedAction);
  });

  it('handles previous', () => {
    const expectedAction = {
      type: actionNames.PREVIOUS,
      id,
    };

    expect(actions.previous(id)).toEqual(expectedAction);
  });
});
