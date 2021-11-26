import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function ProjectsP() {
  const { content } = useContext(ResumeContext);

  let contentUse;
  contentUse = content;
  
  //If there is no data, the Title of the section will not be displayed
  let title;
  if (Object.keys(contentUse.projects).length === 2) {
    title = "";
  } 
  else if(contentUse.projects.project1 === "" &&
          contentUse.projects.project2 === "" &&
          contentUse.projects.finish1 === "" &&
          contentUse.projects.finish2 === "" &&
          contentUse.projects.position1 === "" &&
          contentUse.projects.position2 === "" &&
          contentUse.projects.desc1[0] === "" &&
          contentUse.projects.desc1[1] === "" &&
          contentUse.projects.desc1[2] === "" &&
          contentUse.projects.desc2[0] === "" &&
          contentUse.projects.desc2[1] === "" &&
          contentUse.projects.desc2[2] === ""
  ){
    title = "";
  }
  else {
    title = (
      <h3>
        <strong>Projects</strong>
      </h3>
    );
  }

  let bulletproject1 = contentUse.projects.desc1.map((el, index) => {
    if (el === "") {
      return "";
    } else {
      return <li key={index}>{el}</li>;
    }
  });

  let bulletproject2 = contentUse.projects.desc2.map((el, index) => {
    if (el === "") {
      return "";
    } else {
      return <li key={index}>{el}</li>;
    }
  });

  return (
    <div className={classes.projectsResume}>
      <div className="">
        {title}
        <p>
          <strong>{contentUse.projects.project1}</strong>{" "}
          {contentUse.projects.local1}
        </p>
        <p>
          {contentUse.projects.position1}<br></br>
          &emsp;
          {contentUse.projects.finish1}
        </p>
        <ul>{bulletproject1}</ul>
        <p>
          <strong>{contentUse.projects.project2}</strong>{" "}
          {contentUse.projects.local2}
        </p>
        <p>
          {contentUse.projects.position2}<br></br>
          &emsp;
          {contentUse.projects.finish2}
        </p>
        <ul>{bulletproject2}</ul>
      </div>
    </div>
  );
}

export default ProjectsP;
