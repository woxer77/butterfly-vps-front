import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import adminReducer from './slices/adminSlice';
import userReducer from './slices/userSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  adminReducer,
  userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH],
      },
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
