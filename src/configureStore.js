/*import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { loggingMiddleware } from 'logger';

const configureStore = ({ initialState = {}, history }) => {

  const reducer = combineReducers({
    routing: routerReducer,
    app: reducers,
  });

  const logger = createLogger();

  const middlewares = [
    routerMiddleware(history),
    loggingMiddleware(),
    thunk,
    logger
  ];

  const store = createStore(
    reducer,
    initialState,
  );

  return store;
};

export default configureStore;
*/
