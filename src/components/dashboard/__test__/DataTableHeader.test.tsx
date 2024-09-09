import { render } from "@testing-library/react";
import { DataTableHeader } from "../DataTableHeader";

describe("DataTableHeader shoud be shown in table user!", () => {
  it("DataTableHeader with title!", () => {
    render(<DataTableHeader />);
  });
});
