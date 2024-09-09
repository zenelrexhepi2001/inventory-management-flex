import { Job } from "./jobs_interfaces";

export interface State {
  jobs: Job[],
  jobDetails: Job;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}