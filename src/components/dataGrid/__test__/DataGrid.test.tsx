import { render } from "@testing-library/react";
import { DataGrid } from "../DataGrid";

describe("DataGrid is a component with children shoud be render!", () => {
  it("DataGrid with Elements", () => {
    render(
      <DataGrid
        isCheckCategory={"test"}
        isOpenTable={true}
        handleCloseTable={() => {}}
        handleChangeSearchInput={() => {}}
        searchInputValue=""
      >
        <h2>With elements</h2>
      </DataGrid>
    );
  });
  it("DataGrid Hidden", () => {
    render(
      <DataGrid
        isCheckCategory={"test"}
        isOpenTable={false}
        handleCloseTable={() => {}}
        handleChangeSearchInput={() => {}}
        searchInputValue=""
      >
        <></>
      </DataGrid>
    );
  });
});
