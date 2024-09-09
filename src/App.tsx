import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Container } from "./components/common";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Provider>
  );
}
