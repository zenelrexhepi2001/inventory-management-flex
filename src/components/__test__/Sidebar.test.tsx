import { Sidebar } from "../common";
import { render } from "@testing-library/react";

describe("Sidebar shoud be render successfully!", () => {
  it("Sidebar current!", () => {
    const fakeCategory: unknown[] = ["Category #1", "Category #2"];

    render(
      <Sidebar
        job={fakeCategory?.[0] as any}
        handleBackToDashboard={() => console.log("Back...")}
        handleCheckCategory={() => console.log("Check Category...")}
        isCheckCategory={"Category"}
        jobName="Software developer..."
      />
    );
  });
});
