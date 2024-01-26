import { configureStore } from "@reduxjs/toolkit" 
import counterReducer from "./features/counterSlice"

export const store = configureStore({
    reducer: {
        counterReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
//sirve para exportar el tipo de estado que tiene el store (estado)

export type AppDispatch = typeof store.dispatch;
// Sirve para exportar el tipo del dispatch, es como si fuera un generador de acciones. (que funciones puede ejecutar)