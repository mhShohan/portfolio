import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    getProfile: build.query({
      query: () => ({
        url: "/profile",
        method: "GET"
      }),
      providesTags: [tagTypes.profile],
    }),

    profileAnalysis: build.query({
      query: () => ({
        url: "/profile/analysis",
        method: "GET"
      }),
      providesTags: [tagTypes.profile],
    }),

    updateProfile: build.mutation({
      query: (payload) => ({
        url: "/profile",
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: [tagTypes.profile],
    }),

  }),
});


export const { useGetProfileQuery, useProfileAnalysisQuery, useUpdateProfileMutation } = profileApi;