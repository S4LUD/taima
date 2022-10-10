import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Project from "./components/Project";
import Main from "./layouts/Main";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route index element={<Project />} />
        <Route path=":project" element={<Project />} />
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
