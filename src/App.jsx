import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Project from "./components/Project";
import Main from "./layouts/Main";
import TimeTracking from "./components/Time-Tracking";
import Dashboard from "./components/Dashboard";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route index element={<Dashboard />} />
        <Route path="project" element={<Project />} />
        <Route path="time-tracking" element={<TimeTracking />} />
        {/* <Route path="time-tracking" element={<TimeTracking />} />
        <Route path="workspace" element={<Workspace />}>
          <Route path="task" element={<Task />} />
          <Route path="member" element={<Member />} />
        </Route> */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
