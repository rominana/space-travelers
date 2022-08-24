import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import { getDragons } from '../redux/dragons';
import DragonsList from '../components/DragonList';

describe('Test rocket reducers and functions', () => {
  it('Fetches data from API', async () => {
    await store.dispatch(getDragons());
    expect(store.getState().dragons).toBeTruthy();
  });
});

describe('Test render page', () => {
  it('Render', () => {
    const tree = render(
      <Provider store={store}>
        <DragonsList />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
