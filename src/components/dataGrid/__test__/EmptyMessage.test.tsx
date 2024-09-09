import { EmptyMessage } from "../EmptyMessage";
import { render } from "@testing-library/react";

describe("Empty message is a component when not data display it", () => {
  it("Display Empty Message", () => {
    render(<EmptyMessage />);
  });
});
