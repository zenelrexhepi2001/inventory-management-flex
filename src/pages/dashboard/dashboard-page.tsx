import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { AppDispatch, useDocumentTitle } from "../../hooks";
import styled from "@emotion/styled";
import {
  Card,
  CreateJobModal,
  DataTable,
  TableJobs,
} from "../../components/dashboard";
import { Grid2 } from "@mui/material";
import { DataTableSearch } from "../../components/dashboard/DataTableSearch";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { JobEnum } from "../../enums/jobs";
import { fetchJobs } from "../../redux/actions/jobActions";
import { Job } from "../../interfaces";

const Wrapper = styled("div")({
  width: "100%",
});

const CardsWrapper = styled("div")({
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  dropShadow: "rgba(0, 0, 0, 0.25)",
  padding: "5px",
});

const DataTableWrapper = styled("div")({
  paddingTop: "8px",
});

export default function DashboardPage() {
  useDocumentTitle("Dashboard page");
  const [isOpenCreateModal, setIsOpenCreateModal] = useState<boolean>(false);
  const [searchTitle, setSearchTitle] = useState<string>("");
  const { jobs } = useSelector((state: RootState) => state?.job);
  const cardsData = Array.from({ length: 3 }, (_, index) => ({
    id: index,
  }));
  const jobsOnRoad: Job[] = jobs?.filter(
    (job) => job.statusName == JobEnum.IN_PROGRESS
  );
  const jobsOnCompleted: Job[] = jobs?.filter(
    (job) => job.statusName == JobEnum.COMPLETED
  );
  const jobsOnHold: Job[] = jobs?.filter(
    (job) => job.statusName == JobEnum.ON_HOLD
  );

  const dispatch = useDispatch() as AppDispatch;

  useEffect(() => {
    fetchAllJobs();
  }, []);

  const filterJobs = useMemo(() => {
    return jobs?.filter((job) =>
      job?.jobName.toLowerCase().includes(searchTitle.toLowerCase())
    );
  }, [searchTitle, jobs]);

  const fetchAllJobs = async () => {
    try {
      const response = await dispatch(fetchJobs()).unwrap();
      return response;
    } catch (error) {
      return error;
    }
  };

  const getDataCards = (result: number) => {
    switch (result) {
      case 0:
        return "#ECDE7C";
      case 1:
        return "#7AC14D";
      case 2:
        return "#FE4C4A";
      default:
        throw new Error("Id Or Color Not Found!");
    }
  };

  const handleGetJobStatus = (job: string) => {
    if (job === JobEnum.COMPLETED) {
      return "#7AC14D";
    } else if (job === JobEnum.IN_PROGRESS) {
      return "#B3D99B";
    } else if (job === JobEnum.ON_HOLD) {
      return "#ECDE7C";
    } else {
      return job;
    }
  };

  const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };

  const handleOpenCreateModal = () => {
    setIsOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setIsOpenCreateModal(false);
  };

  return (
    <Wrapper>
      <CardsWrapper>
        <Grid2 container columnSpacing={1}>
          {cardsData.map((result) => (
            <Grid2 key={result.id} size={4}>
              <Card
                title={`
                  ${
                    (result.id == 0 && `${jobsOnRoad?.length} On Road`) ||
                    (result.id == 1 &&
                      `${jobsOnCompleted?.length} completed`) ||
                    (result.id == 2 && `${jobsOnHold?.length} On Hold`)
                  }
                  `}
                backgroundColor={getDataCards(result.id)}
              />
            </Grid2>
          ))}
        </Grid2>
      </CardsWrapper>
      <DataTableWrapper>
        <DataTable>
          <DataTableSearch
            searchTitle={searchTitle}
            handleChangeSearchInput={handleChangeSearchInput}
            handleOpenCreateModal={handleOpenCreateModal}
          />
          <TableJobs
            jobs={filterJobs}
            handleGetJobStatus={handleGetJobStatus}
          />
        </DataTable>
      </DataTableWrapper>
      {isOpenCreateModal && (
        <CreateJobModal handleCloseEditJobModal={handleCloseCreateModal} />
      )}
    </Wrapper>
  );
}
