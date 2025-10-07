import React from "react";
import Navbar from "../components/Navbar";

const Page404 = () => {
  return (
    <>
      <Navbar />
      <div className="m-4">
        <div className="text-4xl text-center">404, Page not found!</div>
      </div>
    </>
  );
};

export default Page404;