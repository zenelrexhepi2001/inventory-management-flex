import { render } from "@testing-library/react";
import { TableJobs } from "../TableJobs";

describe("This table shoud be render in dashboard", () => {
  it("Table with data!", () => {
    render(<TableJobs jobs={[]} handleGetJobStatus={() => {}} />);
  });
  it("Table with No data!", () => {
    render(<TableJobs jobs={null as any} handleGetJobStatus={() => {}} />);
  });
});
