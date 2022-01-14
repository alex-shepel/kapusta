import { authReducer } from './auth';
// import { transactionReducer } from './transaction';
// import { userReducer } from './user';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
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
  whitelist: ['isLoggedIn'],
};

const rootReducer = combineReducers({
  // transaction: transactionReducer,
  // user: userReducer,
  auth: persistReducer(persistConfig, authReducer),
});

const middlewaresCheckIgnore = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: middlewaresCheckIgnore,
});

const persistor = persistStore(store);

export { store, persistor };
