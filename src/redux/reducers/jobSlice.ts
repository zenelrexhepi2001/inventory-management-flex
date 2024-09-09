import { createSlice } from "@reduxjs/toolkit";
import { Job, State } from "../../interfaces";
import { createJob, fetchJobs, fetchSingleJob, updateSingleJob } from "../actions/jobActions";

const initialState = {
  jobs: [] as Job[],
  jobDetails: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
} as State

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.jobs = action.payload;
        state.isError = false;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload as string;
      })
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.jobs = [...state.jobs, {
          id: action.payload?.id,
          jobName: action.payload?.jobName,
          category: action.payload?.category,
          statusName: action.payload?.statusName,
        }];
        state.isError = false;
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(fetchSingleJob.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(fetchSingleJob.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.jobs = action.payload?.job;
        state.jobDetails = action.payload;
        state.message = "Success!"
      })
      .addCase(fetchSingleJob.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(updateSingleJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs?.map((result) => {
          if (result.id === action.payload?.id) {
            return {
              ...result,
              id: action.payload?.id,
              item: action.payload?.item,
              quantity: action.payload?.quantity,
              description: action.payload?.description,
              notes: action.payload?.notes,
            }
          }
          return result;
        })
        state.isSuccess = true;
      })
  }
});

export default jobSlice.reducer;