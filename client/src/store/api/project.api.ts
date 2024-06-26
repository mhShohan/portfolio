import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    getAllProjects: build.query({
      query: () => ({
        url: "/projects",
        method: "GET"
      }),
      providesTags: [tagTypes.project],
    }),

    getSingleProject: build.query({
      query: (id) => ({
        url: "/projects/" + id,
        method: "GET"
      }),
      providesTags: [tagTypes.project],
    }),

    addProject: build.mutation({
      query: (payload) => ({
        url: "/projects",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.project],
    }),

  }),
});


export const { useGetAllProjectsQuery, useGetSingleProjectQuery, useAddProjectMutation } = projectApi;