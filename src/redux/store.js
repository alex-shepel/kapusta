import { createLogger } from 'redux-logger';
import { authReducer } from './auth';
// import { transactionReducer } from './transaction';
// import { userReducer } from './user';
import {
  combineReducers,
  configureStore,
  // getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['isLoggedIn', 'sid', 'refreshToken'],
};

const rootReducer = combineReducers({
  // transaction: transactionReducer,
  // user: userReducer,
  auth: persistReducer(persistConfig, authReducer),
});
const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  timestamp: false,
});
// const middlewaresCheckIgnore = getDefaultMiddleware({
//   serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   },
// });

const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV === 'development',
  // middleware: middlewaresCheckIgnore,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export { store, persistor };
