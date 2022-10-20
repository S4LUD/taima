import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Left_Navigtaion from "../Left_Navigation";
import Right_Navigation from "../Right_Navigation";
import RootCSS from "./index.module.scss";

export default function Main() {
  return (
    <>
      <Header />
      <div className={RootCSS._root_layout}>
        <Left_Navigtaion />
        <div className={RootCSS._root_wrap_layout}>
          <Outlet />
          <Right_Navigation />
        </div>
      </div>
    </>
  );
}
