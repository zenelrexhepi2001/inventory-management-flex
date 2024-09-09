import { Container } from "../common";
import { render } from "@testing-library/react";

test("Container Test", () => {
  render(
    <Container>
      <p>Container test</p>
    </Container>
  );
});
