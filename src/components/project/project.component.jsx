import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../../control/cartSlice";
import "./project.styles.jsx";
import Navbar from "../navbar/navbar.component";
import { Avatar, Language, ProjectCard, ProjectInfo, ProjectName, ProjectsContainer } from "./project.styles.jsx";

const ProjectsList = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.cart.projects);
  const status = useSelector((state) => state.cart.status);
  const error = useSelector((state) => state.cart.error);

  useEffect(() => {
    // Component mount olduğunda API isteğini başlat
    dispatch(fetchProjects());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Navbar/>
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            href={project.html_url} 
            target="_blank" 
            rel="noopener noreferrer"            
          >
            <Avatar src={project.owner.avatar_url} alt=""/>
            <ProjectInfo>
              <ProjectName>{project.name}</ProjectName>
              <Language>{project.language}</Language>
              
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </div>
  );
};

export default ProjectsList;
