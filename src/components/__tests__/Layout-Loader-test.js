import React from 'react';
import renderer from 'react-test-renderer';

import Loader from '../Layout/Loader';

it('renders a Loader using Snapshots', () => {
    const component = renderer.create(
      <Loader
        onPress={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });