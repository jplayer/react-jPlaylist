import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockTitle = () =>
  <div />;
const titleContainer = proxyquire('./titleContainer', {
  'react-jplayer': { TitleComponent: mockTitle },
}).default;
const setup = (jPlayers, props) => containerSetup(titleContainer, jPlayers, props);

describe('TitleContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        playlist: [{
          title: 'Bubble',
          artist: 'Kalimba',
        }],
      },
    };
  });

  it('passes in src', () => {
    const { wrapper } = setup(jPlayers);

    expect(wrapper.find(mockTitle).prop('title')).toBe('Kalimba - Bubble');
  });
});
