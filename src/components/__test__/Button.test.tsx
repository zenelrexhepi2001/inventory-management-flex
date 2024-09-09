import { render } from "@testing-library/react";
import { Button } from "../common";

describe("Button Shoud be Pass test successfully!", () => {
  it("renders without crashing button!", () => {
    render(
      <Button
        type="button"
        variant="contained"
        onClick={() => {}}
        disabled={true}
        backgroundColor={"#000"}
        title=""
      />
    );
  });

  it("renders the currect button working!", async () => {
    const onClick = jest.fn;
    const { getByRole } = render(
      <Button
        type="button"
        variant="outlined"
        onClick={onClick}
        disabled={false}
        backgroundColor={"#000"}
        title="Create Job"
      />
    );
    const btn = getByRole("button");
    btn.click();

    expect(getByRole("button")).toBeInTheDocument();
  });
});
