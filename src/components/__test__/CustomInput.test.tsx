import { render } from "@testing-library/react";
import { CustomInput } from "../common";

describe("input shoud be render!", () => {
  it("Input without crashing...", () => {
    render(
      <CustomInput
        type="text"
        id="name"
        name="name"
        value={"name"}
        onChange={() => {}}
        disabled={false}
        placeholder="Enter your name"
      />
    );
  });
  it("Input the current", async () => {
    const onChangeSpy = jest.fn;
    const { getByRole } = render(
      <CustomInput
        type="text"
        id="name"
        name="name"
        value={"name"}
        onChange={onChangeSpy}
        disabled={false}
        placeholder="Enter your name"
      />
    );
    const onChange = getByRole("textbox");
    return onChange;
  });
});
