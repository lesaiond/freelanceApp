import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./tokenAPI";
import { IGetPostList } from "./Api";


export const postApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPostList: builder.query<IGetPostList, null>({
      query: () => `/users/0.1/users/?users[]=1&users[]=2`,
    }),
  }),
});

export const { useGetPostListQuery, useLazyGetPostListQuery } = postApi;