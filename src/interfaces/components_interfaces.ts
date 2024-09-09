import {  SelectChangeEvent } from "@mui/material";
import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";
import { Job } from "./jobs_interfaces";

export interface ButtonProps {
  type: "button" | "submit",
  variant?: "outlined" | "contained" | "text";
  title?: string;
  onClick?: () => void;
  icon?: ReactNode;
  backgroundColor?: string;
  disabled?: boolean;
}

export interface ContainerProps {
  children: ReactNode;
};

export interface CustomLinkProps {
  to: string;
  children?: ReactNode;
}

export interface CustomModalProps {
  children: ReactNode;
  handleCloseModal: () => void;
}

export interface CustomSelectProps {
  inputLabel: string;
  value: string[];
  onChange: (e: SelectChangeEvent<string[]>) => void;
  data: { id: number, title: string }[];
  renderValue?: any;
  placeholder: string;
  backgroundColor?: any;
  backgroundColorHover?: any;
  sx?: any;
  multiple?: boolean;
}

export interface EditJobModalProps {
  handleCloseEditJobModal: () => void;
}

export interface InputProps {
  type: "text" | "number" | "email" | "password",
  name: string;
  id: string;
  disabled: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  icon?: ReactNode;
  color?: string;
  width?: string;
}

export interface DataGridProps {
  categoryName?: string[];
  children: ReactNode;
  isOpenTable: boolean;
  handleCloseTable: () => void;
  searchInputValue: string;
  handleChangeSearchInput: (e: ChangeEvent<HTMLInputElement>) => void;
  isCheckCategory: string;
}

export interface DashboardCardProps {
  title: string;
  backgroundColor: unknown;
}

export interface DataTableProps {
  children: ReactNode;
}

export interface DataTableSearchProps {
  searchTitle: string;
  handleChangeSearchInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOpenCreateModal: () => void;
}

export interface StatusButtonProps {
  title: string;
  color: string;
}

export interface SidebarProps {
  job: string[]
  jobName: string;
  handleBackToDashboard: () => void;
  isCheckCategory: string;
  handleCheckCategory: (id: string) => void;
}

export interface TableJobsProps {
  jobs: Job[],
  handleGetJobStatus: (job: string) => void;
}

export interface InventoryTableProps {
  categoryData: Job;
  id: any;
  handleOpenEditCategory: (id: number) => void;
  isOpenUpdateModal: number;
  setIsOpenUpdateModal: Dispatch<SetStateAction<number>>
}

export interface InventoryEditModalProps {
  handleCloseEditJobModal: () => void;
  data: Job;
  id: number;
}