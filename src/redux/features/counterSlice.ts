"use client";

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    counter : 0
}


export const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers: {     //son las acciones que voy a realizar, y mas abajo las exporto
        increment: (state)=>{
            state.counter +=1
        },
        decrement : (state)=>{
            state.counter -= 1
        }
    }
})

export const {increment, decrement} = counterSlice.actions //exporto las acciones o fn que hace mi reducer.

export default counterSlice.reducer //va sin llaves porque es por default, y .reducer para darle el valor inicial