export interface Job {
  id?: string;
  jobName: string;
  category?: {
    name: string[],
    data: {
      nr?: number;
      item?: string;
      quantity?: number;
      description?: string;
      notes?: string
    }[]
  },
  statusName: string;
}