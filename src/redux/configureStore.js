import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import fakeReducer from './rockets/rockets';

export default configureStore({
  reducer: {
    fake: fakeReducer,
  },
  middleware: [thunk, logger],
});
