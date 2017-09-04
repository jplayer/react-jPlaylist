import expect from 'expect';

import TogglePlaylist from './togglePlaylist';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(TogglePlaylist, {
  children: 'togglePlaylist',
  togglePlaylist: expect.createSpy(),
  ...props,
});

describe('TogglePlaylist', () => {
  it('has togglePlaylist class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.TOGGLE_PLAYLIST)).toBe(true);
  });

  it('toggles the playlist on click', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.togglePlaylist).toHaveBeenCalled();
  });

  it('children are rendered', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('children')).toBe(props.children);
  });
});
