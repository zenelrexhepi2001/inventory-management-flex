import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  return (
    <div>
      <h3>Oops!</h3>
      <h5>{error.statusText || error.message}</h5>
    </div>
  )
}