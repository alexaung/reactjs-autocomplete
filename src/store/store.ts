import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import journeyReducer from '../reducers/journeySlice'

// const logger = reduxLogger.createLogger()


const store = configureStore({
    reducer: {
        journey: journeyReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch