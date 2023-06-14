import React from "react";
import { Outlet } from "react-router-dom";
import { InfoContextProvider } from "../contexts/Context"


const LayoutPublic = () => {
  return (
    <InfoContextProvider>
      
      <main className="container">
        <Outlet />
      </main>
     
    </InfoContextProvider>
  );
};

export default LayoutPublic;