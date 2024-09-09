import { render } from "@testing-library/react";
import { DataTableSearch } from "../DataTableSearch";

describe("DataTableSearch shoud be shown users!", () => {
  it("DataTableSearch when shown!", () => {
    render(
      <DataTableSearch
        searchTitle="Title"
        handleChangeSearchInput={() => console.log("Enter search value...")}
        handleOpenCreateModal={() => console.log("Open create modal!")}
      />
    );
  });

  it("DataTable when not working currect!", () => {
    render(
      <DataTableSearch
        searchTitle=""
        handleChangeSearchInput={() => {}}
        handleOpenCreateModal={() => {}}
      />
    );
  });
});
