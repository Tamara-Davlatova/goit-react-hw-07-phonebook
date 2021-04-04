// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contacts-reducer';

// const persistContactsConfig = {
//   key: 'contacts',
//   storage: storage,
//   blacklist: ['filter'],
// };

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

// export const persistor = persistStore(store);
