import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketsList from '../components/RocketList';
import { fetchRocketsApi } from '../redux/RocketSlice';

const renderRocketList = () => {
  const { container } = render(
    <Provider store={store}>
      <RocketsList />
    </Provider>,
  );
  return container;
};

describe('Test Rocket page', () => {
  test('Match Snapshot & render Rocket List on screen', () => {
    expect(renderRocketList().firstChild).toMatchSnapshot();
  });
});

describe('Test rocket reducers and functions', () => {
  it('Fetches data from API', async () => {
    await store.dispatch(fetchRocketsApi());
    expect(store.getState().rockets).toBeTruthy();
  });
});
