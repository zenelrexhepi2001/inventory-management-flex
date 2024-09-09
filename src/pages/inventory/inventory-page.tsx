import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Sidebar } from "../../components/common";
import styled from "@emotion/styled";
import { DataGrid, EmptyMessage } from "../../components/dataGrid";
import { AppDispatch, useDocumentTitle } from "../../hooks";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleJob } from "../../redux/actions/jobActions";
import { RootState } from "../../redux/store";
import { InventoryTable } from "../../components/inventory";

const Wrapper = styled("div")({
  display: "flex",
  gap: 8,
  flexDirection: "row",
});

const WrapperContainer = styled("div")({
  flex: 1,
});

export default function InventoryPage() {
  const [isCheckCategory, setIsCheckCategory] = useState<string>("");
  const [isOpenTable, setIsOpenTable] = useState<boolean>(false);
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState<number>(0);
  const { id } = useParams();
  useDocumentTitle(`Inventory #${id}`);
  const navigation = useNavigate();
  const { jobs, jobDetails } = useSelector((state: RootState) => state.job);
  const dispatch = useDispatch() as AppDispatch;

  useEffect(() => {
    fetchJob();
  }, []);

  const filterJobs = useMemo(() => {
    return jobDetails?.category?.name?.filter((category) =>
      category.toLowerCase().includes(searchTitle.toLowerCase())
    );
  }, [jobDetails, searchTitle, jobs]);

  const fetchJob = async () => {
    try {
      const response = await dispatch(fetchSingleJob(id as string));
      return response;
    } catch (error) {
      return error;
    }
  };

  const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };

  const handleBackToDashboard = () => {
    navigation("/");
  };

  const handleCheckCategory = (id: string) => {
    setIsCheckCategory(id);
    setIsOpenTable(true);
  };

  const handleCloseTable = () => {
    setIsOpenTable(false);
    setIsCheckCategory("");
  };

  const handleOpenEditCategory = (id: number) => {
    setIsOpenUpdateModal(id);
  };

  return (
    <Wrapper>
      <Sidebar
        job={filterJobs as string[]}
        jobName={jobDetails?.jobName}
        isCheckCategory={isCheckCategory}
        handleCheckCategory={handleCheckCategory}
        handleBackToDashboard={handleBackToDashboard}
      />
      <WrapperContainer>
        <DataGrid
          isOpenTable={isOpenTable}
          categoryName={jobDetails?.category?.name?.[0] as any}
          isCheckCategory={isCheckCategory}
          handleCloseTable={handleCloseTable}
          searchInputValue={searchTitle}
          handleChangeSearchInput={handleChangeSearchInput}
        >
          {isCheckCategory ? (
            <>
              {isOpenTable && (
                <InventoryTable
                  handleOpenEditCategory={handleOpenEditCategory}
                  isOpenUpdateModal={isOpenUpdateModal}
                  categoryData={jobDetails}
                  id={jobDetails.id}
                  setIsOpenUpdateModal={setIsOpenUpdateModal}
                />
              )}
            </>
          ) : (
            <EmptyMessage />
          )}
        </DataGrid>
      </WrapperContainer>
    </Wrapper>
  );
}
