import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function AdditionalSkillsP() {
  const { content, control, contentFake } = useContext(ResumeContext);

  //If the "control" is TRUE - use "Fake State" to show the example on the page
  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }

  //If there is no data, the Title of the section will not be displayed
  let title;
  if (contentUse.additional.length === 0) {
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
  if (!contentUse.additional.skills) {
    toolTitle = "";
  } else {
    toolTitle = "Tools: ";
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
        {/* <ul>{bulletsData}</ul> */}
      </div>
    </div>
  );
}

export default AdditionalSkillsP;
