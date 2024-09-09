import { api } from "../api/api"
import { Job } from "../interfaces";

export const getJobs = async () => {
  try {
    const response = await api.get(`/jobs`);
    return response?.data;
  } catch (error) { return error };
}

export const getSingleJob = async (id: string) => {
  try {
    const response = await api.get(`/jobs/${id}`);
    return response?.data;
  } catch (error) { return error };
}

export const create = async (data: Job) => {
  try {
    const response = await api.post(`/jobs`, data);
    return response.data;
  } catch (error) { return error };
}

export const updateJob = async (data: Job) => {
  try {
    const response = await api.patch(`/jobs/${data.id}`, data);
    return response?.data;
  } catch (error) { return error };
}

export const removeJob = async (id: number) => {
  try {
    const response = await api.delete(`/jobs/${id}`);
    return response?.data;
  } catch (error) { return error };
}