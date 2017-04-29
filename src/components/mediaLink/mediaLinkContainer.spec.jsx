import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';

import { __get__ } from './mediaLinkContainer';
import MediaLink from './mediaLink';
import { play } from '../../actions/actions';

const mapStateToProps = __get__('mapStateToProps');
const mapDispatchToProps = __get__('mapDispatchToProps');

const id = 'jPlaylist-1';
const setup = () => {
  const props = {
    id,
    index: 0,
    play: null,
    children: 'exists',
    attributes: {
      'data-test': 'test',
    },
  };

  const wrapper = shallow(<MediaLink {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('MediaLinkContainer', () => {
  let props;
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('mapStateToProps', () => {
    ({ props } = setup());

    const ownProps = {
      id: props.id,
      index: props.index,
      children: props.children,
    };
    const stateProps = mapStateToProps({ jPlaylists: null }, {
      ...ownProps,
      ...props.attributes,
    });

    expect(stateProps).toEqual({
      ...ownProps,
      attributes: props.attributes,
    });
  });

  it('plays selected item when called', () => {
    ({ props } = setup());

    const dispatchProps = mapDispatchToProps(dispatch);

    dispatchProps.play(props.id, props.index);

    expect(dispatch).toHaveBeenCalledWith(play(props.id, props.index));
  });
});
