import expect from 'expect';

import getLoopState from './getLoopState';

describe('getLoopState', () => {
  it('starts looping if looping is off', () => {
    const loop = getLoopState('off');

    expect(loop).toBe('loop');
  });

  it('starts looping the playlist if looping', () => {
    const loop = getLoopState('loop');

    expect(loop).toBe('loop-playlist');
  });

  it('stops looping if looping the playlist', () => {
    const loop = getLoopState('loop-playlist');

    expect(loop).toBe('off');
  });
});
