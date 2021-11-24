import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function AbilitiesP() {
  const { content } = useContext(ResumeContext);

  let contentUse;
  contentUse = content;
  

  //If there is no data, the Title of the section will not be displayed
  let title;
  if(contentUse.additional.length === 0){
    title = "";
  }
  else if (contentUse.additional.skills === "" && 
           contentUse.additional.tools === "" && 
            contentUse.additional.certifications === "") {
      title = "";
  } else {
    title = (
      <h3>
        <strong>Abilities</strong>
      </h3>
    );
  }
  let skillTitle;
  if (!contentUse.additional.skills) {
    skillTitle = "";
  } else {
    skillTitle = "Skills: ";
  }

  let toolTitle;
  if (!contentUse.additional.tools) {
    toolTitle = "";
  } else {
    toolTitle = "Tools: ";
  }

  let certTitle;
  if (!contentUse.additional.certifications) {
    certTitle = "";
  } else {
    certTitle = "Certifications: ";
  }
  return (
    <div className={classes.professionalResume}>
      <div className="">
        {title}
        <p>
          &emsp;
          <strong>{skillTitle}</strong>
          {content.additional.skills}
        </p>
        <p>
        &emsp;
        <strong>{toolTitle}</strong>
          {content.additional.tools}
        </p>
        <p>
        &emsp;
        <strong>{certTitle}</strong>
          {content.additional.certifications}
        </p>
        
      </div>
    </div>
  );
}

export default AbilitiesP;
