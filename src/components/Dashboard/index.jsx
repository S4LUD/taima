import React from "react";
import DashboardCSS from "./index.module.scss";

export default function Dashboard() {
  return (
    <div className={DashboardCSS._dashboard_container}>
      <div className={DashboardCSS._wrap_dashboard}>Dashboard</div>
    </div>
  );
}
