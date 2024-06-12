import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import ProjectData from "@/components/ProjectData"; // Import your project data
import RootLayout from "./layout";

const ProjectDetails = ({ params }) => {
  // Find the project with the matching id
  const project = ProjectData.find((p) => p.id === parseInt(params.projectId));
  console.log("akljfah");

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="mt-4 pt-24">
      <h1>Hello World</h1>
    </div>
  );
};

export default ProjectDetails;
