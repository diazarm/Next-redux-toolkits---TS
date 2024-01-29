"use client";

import React from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {increment, decrement} from '@/redux/features/counterSlice'
import { useGetUserByIdQuery, useGetUserQuery } from '@/redux/services/userApi';

function HomePage() {
  
  const count = useAppSelector(state => state.counterReducer.counter) //toma el valor de counter que esta en el counterSlice
  const {data, error, isLoading, isFetching} = useGetUserQuery(null)
  
  const dispatch = useAppDispatch()
  if(isLoading || isFetching) return <p> Loading...</p>
  if(error) return <p>Some Error.. </p>



  return (
    <div>
      <h1 className='text-center text-2x1'>
        total : {count}
      </h1>
      <div className='flex justify-center gap-x-2 pb-3 pt-3'>
      <button
      className='bg-green-500 px-3 p-2 rounded-md'
      onClick={()=>{
        dispatch(increment())
      }}
      >Increment</button>
      <br />
      <button
      className='bg-blue-500 px-3 py-2 rounded-md '

      onClick={()=>{
        dispatch(decrement())
      }}
      >Decrement</button>
      </div>
  <div className='grid grid-cols-3 mx-auto gap-3'>
  {
    data?.map(user =>(
      <div key={user.id} className='bg-zinc-800 p-4'>
        <p>{user.name}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
      </div>
    ))
  }

  </div>
  </div>
  )
}

export default HomePage