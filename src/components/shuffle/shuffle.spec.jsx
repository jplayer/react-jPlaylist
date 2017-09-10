import expect from 'expect';

import Shuffle from './shuffle';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(Shuffle, {
  children: 'shuffle',
  shuffle: expect.createSpy(),
  ...props,
});

describe('Shuffle', () => {
  it('has shuffle class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.SHUFFLE)).toBe(true);
  });

  it('shuffles the media on click', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.shuffle).toHaveBeenCalled();
  });

  it('children are rendered', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('children')).toBe(props.children);
  });
});
