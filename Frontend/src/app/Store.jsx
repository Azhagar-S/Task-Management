import {configureStore} from "@reduxjs/toolkit"
import todoReducer from '../Slices/TodoSlicer'
import authReducer from '../Slices/AuthSlice'

export const store = configureStore({
    reducer: {
      auth:authReducer,
     
    },
  })