import { createAsyncThunk } from "@reduxjs/toolkit";
import { create, getJobs, getSingleJob, removeJob, updateJob } from "../../services";
import { Job } from "../../interfaces";

export const fetchJobs = createAsyncThunk("fetch/jobs",
  async (_, thunkAPI) => {
    try {
      const response = await getJobs();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchSingleJob = createAsyncThunk("fetch/job",
  async (id: string, thunkAPI) => {
    try {
      const response = await getSingleJob(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createJob = createAsyncThunk("create/job",
  async (data: Job, thunkAPI) => {
    try {
      const response = await create(data);
      return response;
    } catch (error) { return thunkAPI.rejectWithValue(error) };
  }
)

export const updateSingleJob = createAsyncThunk("update/job",
  async (data: Job, thunkAPI) => {
    try {
      const response = await updateJob(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteJob = createAsyncThunk("delete/job",
  async (id: number, thunkAPI) => {
    try {
      const response = await removeJob(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

