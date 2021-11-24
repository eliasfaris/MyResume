import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function VolunteerP() {
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
  if (contentUse.volunteer.length === 0) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Volunteer Experience</strong>
      </h3>
    );
  }

  let bulletsData = contentUse.volunteer.map((el, index) => {
    if (el === "") {
      return "";
    } else {
      return <li key={index}>{el}</li>;
    }
  });
  return (
    <div className={classes.professionalResume}>
      <div className="">
        {title}
        <ul>{bulletsData}</ul>
      </div>
    </div>
  );
}

export default VolunteerP;