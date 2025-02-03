import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default: localStorage
import rootSaga from "../../Network/saga";
import rootReducers from "../reducers"; // Your combined reducers

// Configure redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"], // Persist only the login slice, you can add more slices if needed
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Configure store with persisted reducer and middleware
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }).concat(sagaMiddleware),
});

// Run root saga
sagaMiddleware.run(rootSaga);

// Create persistor
const persistor = persistStore(store);

export { store, persistor };
