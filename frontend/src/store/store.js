import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';

import { rootReducer } from './root-reducer';

const middlewares = [process.env.NODE_ENV === "development" && logger, thunk].filter(Boolean);

const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;