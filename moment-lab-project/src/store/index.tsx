import { configureStore } from '@reduxjs/toolkit';
import iconReducer from './iconChoice'

export const store = configureStore({
    reducer: {
        icon: iconReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
