import { render, screen } from "@testing-library/react";
import { CustomModal } from "../common";

describe("Modal shoud be shown in test!", () => {
  let modalShown;
  it("when modal not shown", () => {
    modalShown = false;
    render(
      <>
        {modalShown && (
          <CustomModal handleCloseModal={() => {}}>
            <div>Modal Not shown!</div>
          </CustomModal>
        )}
      </>
    );
  });
  it("when modal shown", () => {
    modalShown = true;
    render(
      <>
        {modalShown && (
          <CustomModal handleCloseModal={() => {}}>
            <div>Modal shown!</div>
          </CustomModal>
        )}
      </>
    );
  });
});
