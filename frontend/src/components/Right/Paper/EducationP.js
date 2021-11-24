import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function EducationP() {
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
  if (Object.keys(contentUse.education).length === 0) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Education</strong>
      </h3>
    );
  }

  let hyphen;
  if (!contentUse.education.gradYear) {
    hyphen = "";
  } else {
    hyphen = "- ";
  }

  let hyphen2;
  if (!contentUse.education.city) {
    hyphen2 = "";
  } else {
    hyphen2 = "- ";
  }

  let additionalTitle;
  if (!contentUse.education.additional) {
    additionalTitle = "";
  } else {
    additionalTitle = "Relevant Courses: ";
  }

  let gpaTitle;
  if (!contentUse.education.gpa) {
    gpaTitle = "";
  } else {
    gpaTitle = "GPA: ";
  }
  // if (Object.keys(contentUse.education.gpa).length === 0) {
  //   gpaTitle = "";
  // } else {
  //   gpaTitle = "GPA: ";
  // }

  return (
    <div className={classes.professionalResume}>
      <div className="">
        {title}
        <p>
          <strong>{contentUse.education.institution} </strong>
          {hyphen2}
          {contentUse.education.city}
        </p>
        <p>
          &emsp;
          {contentUse.education.major} {hyphen}
          {contentUse.education.gradYear}
        </p>
        <p>
          &emsp;
          {gpaTitle}
          {contentUse.education.gpa}
        </p>
        &emsp;
        <strong>{additionalTitle}</strong>
        {contentUse.education.additional}
      </div>
    </div>
  );
}

export default EducationP;
