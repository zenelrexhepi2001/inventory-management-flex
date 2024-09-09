import { render } from "@testing-library/react";
import { StatusButton } from "../StatusButton";
import { JobEnum } from "../../../enums/jobs";

describe("Status button shoud be render user table!", () => {
  it("Status button with colors!", () => {
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
    const { getByText } = render(
      <StatusButton title="Completed" color={handleGetJobStatus("1")} />
    );

    expect(getByText("Completed")).toBeInTheDocument();
  });
  it("Status button without colors!", () => {
    render(<StatusButton title="Completed" color="transparent" />);
  });
});
