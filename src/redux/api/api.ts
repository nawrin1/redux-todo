import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes:["todo"],
    endpoints: (builder) => ({
        // getTodos: builder.query({
        //     query: (priority) => ({
        //         url: `/tasks?priority=${priority}`,
        //         method: 'GET',
        //     }),
        //     providesTags: ["todo"],
        // // }),
        // getTodos: builder.query({
        //     query: (priority) => ({
        //         url: `/tasks`,
        //         method: 'GET',
        //         params: { priority }// or {priority:priority} just using short hand rules of js
                                       //params e obj pathate hoi
        //     }),
        //     providesTags: ["todo"],
        // }),//below another way
        getTodos: builder.query({
            query: (priority) =>  {
                const param = new URLSearchParams(); // as constructor so new shamne likha lage
                console.log(param);
                if (priority) {
                  param.append("priority", priority);
                }
                return {
                  url: `/tasks`,
                  method: "GET",
                  params: param, // as param is a an obj and we can append in that we can directly use param obj here
                };
              },
            providesTags: ["todo"],
        }),
        addTodos: builder.mutation({
            query: (data) => ({
                url: "/task",
                method: 'POST',
                body:data//must obj pathabo as backend obj excpect kore
            }),
            invalidatesTags:['todo']
        }),
        updateTodos: builder.mutation({
            query: (options) => ({
                url: `/task/${options.id}`,
                method: 'PUT',
                body:options.data//must obj pathabo as backend obj excpect kore
            }),
            invalidatesTags:['todo']
        }),
    }),
});

export const { useGetTodosQuery,useAddTodosMutation,useUpdateTodosMutation } = baseApi;

