import { createStore, compose, applyMiddleware } from 'redux';
// import { sessionService } from 'redux-react-session';
import createSagaMiddleware  from 'redux-saga';

import { rootReducer } from './reducers/index';
//
// import { rootSaga } from './sagas/index';

// const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadedState => (
  createStore(
    rootReducer
  )
);


// composeEnhancers(
//   applyMiddleware(sagaMiddleware)
// ),

const store = configureStore({});


// sagaMiddleware.run(rootSaga)
// sessionService.initSessionService(store);

export default store;
