import React from "react";
import Loader from "react-loader-spinner";

export default function Loading() {
  return (
    <Loader
      type="ThreeDots"
      color="#212529"
      height={150}
      width={150}
      timeout={3000}
    />
  );
}
