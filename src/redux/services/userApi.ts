import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
    id: number,
    name: string,
    email: string,
    username : string
}

export const userApi = createApi({
    reducerPath : 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    endpoints : (builder) => ({
        getUser : builder.query<User[], null>({
            query : () => "users" // http://localhost/users   
        }),
        getUserById: builder.query<User, {id:string}>({
           query: ({id}) => `users/${id}` // http://localhost/users/10
        })
    })
})


export const { useGetUserByIdQuery, useGetUserQuery} = userApi