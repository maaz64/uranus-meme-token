import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/uranus-meme-token", element: <Homepage /> },
    { path: "*", element: <NotFound /> },
    
  ]);

  return element;
};

export default ProjectRoutes;
