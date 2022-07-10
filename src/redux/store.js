import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import {changeSetting} from "./setSlice";


const persistConfig = {
    key: 'setting',
    storage,
}
const reducers = combineReducers({setting: changeSetting.reducer});
const persistedReducer = persistReducer(persistConfig, reducers)

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
