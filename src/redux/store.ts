import { configureStore } from "@reduxjs/toolkit" 
import counterReducer from "./features/counterSlice"
import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        counterReducer,
        "userApi" : userApi.reducer //tamb puede ser [userApi.reducerPath] : userApi.reducer
    },
    middleware : (getDefaultMiddleware) => 
            getDefaultMiddleware().concat([userApi.middleware])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
//sirve para exportar el tipo de estado que tiene el store (estado)

export type AppDispatch = typeof store.dispatch;
// Sirve para exportar el tipo del dispatch, es como si fuera un generador de acciones. (que funciones puede ejecutar)