import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/user';
import { persistReducer, persistStore } from 'redux-persist';
import { AsyncStrage } from 'react-native';

const rootReducer = combineReducers({
    user: userReducer
})

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStrage,
//     whiteList: ['user']
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(persistedReducer);
const store = createStore(rootReducer);

// export const persistor = persistStore(store);

export default store;