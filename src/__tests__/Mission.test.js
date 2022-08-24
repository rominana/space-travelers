import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Mission from '../components/Mission';
import store from '../redux/configureStore';

it('Missions renders correctly', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Mission />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
