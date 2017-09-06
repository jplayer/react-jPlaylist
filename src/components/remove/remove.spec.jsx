import expect from 'expect';

import Remove from './remove';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(Remove, {
  remove: expect.createSpy(),
  ...props,
});

describe('Remove', () => {
  it('has remove class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.REMOVE)).toBe(true);
  });

  it('removes media on click', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.remove).toHaveBeenCalled();
  });

  describe('children', () => {
    it('renders as default', () => {
      const { wrapper } = setup();

      expect(wrapper.prop('children')).toExist();
    });

    it('renders as custom when specified', () => {
      const children = 'remove';
      const { wrapper } = setup({ children });

      expect(wrapper.prop('children')).toBe(children);
    });
  });
});
