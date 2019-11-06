import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './Reducer';
import rootSaga from '../Saga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['loginReducer'],
  // blacklist: ['changePasswordReducer','billingReducer','authenticationReducer', 'productListingReducer', 'productDetailReducer', 'productSearchReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// create saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [];
const enhancers = [];

middleware.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middleware));

const store = createStore(persistedReducer, composeEnhancers(...enhancers));
const persistor = persistStore(store);

// run the saga
sagaMiddleware.run(rootSaga);
export { store, persistor };
