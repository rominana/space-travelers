import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketsList from '../components/RocketList';

const renderRocketList = () => {
  const { container } = render(
    <Provider store={store}>
      <RocketsList />
    </Provider>,
  );
  return container;
};

describe('Test Rocket page', () => {
  test('Match Snapshot & render Rocket List', () => {
    expect(renderRocketList().firstChild).toMatchSnapshot();
  });
});
