import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function ProfessionalP() {
  const { content } = useContext(ResumeContext);


  let contentUse;
  contentUse = content;


  // console.log("Length: " + Object.keys(contentUse.company1).length);
  //If there is no data, the Title of the section will not be displayed
  console.log(Object.keys(contentUse.professional).length);
  let title;
  if (Object.keys(contentUse.professional).length ===2) {
    title = "";
  } 
  else if(contentUse.professional.company1 === "" &&
          contentUse.professional.company2 === "" &&
          contentUse.professional.start1 === "" &&
          contentUse.professional.end1 === "" &&
          contentUse.professional.start2 === "" &&
          contentUse.professional.end2 === "" &&
          contentUse.professional.position1 === "" &&
          contentUse.professional.position2 === "" &&
          contentUse.professional.local1 === "" &&
          contentUse.professional.local2 === "" &&
          contentUse.professional.desc1[0] === '' &&
          contentUse.professional.desc1[1] === '' &&
          contentUse.professional.desc1[2] === '' &&
          contentUse.professional.desc2[0] === '' &&
          contentUse.professional.desc2[1] === '' &&
          contentUse.professional.desc2[2] === ''
  ){
    title = "";
  }
  else {
    title = (
      <h3>
        <strong>Work Experience</strong>
      </h3>
    );
  }

  let bulletProfessional1 = contentUse.professional.desc1.map((el, index) => {
    if (el === "") {
      return "";
    } else {
      return <li key={index}>{el}</li>;
    }
  });

  let bulletProfessional2 = contentUse.professional.desc2.map((el, index) => {
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
        <p>
          <strong>{contentUse.professional.company1}</strong>{" "}
          {contentUse.professional.local1}
        </p>
        <p>
          {contentUse.professional.position1} {contentUse.professional.start1}{" "}
          {contentUse.professional.end1}
        </p>
        <ul>{bulletProfessional1}</ul>
        <p>
          <strong>{contentUse.professional.company2}</strong>{" "}
          {contentUse.professional.local2}
        </p>
        <p>
          {contentUse.professional.position2} {contentUse.professional.start2}{" "}
          {contentUse.professional.end2}
        </p>
        <ul>{bulletProfessional2}</ul>
      </div>
    </div>
  );
}

export default ProfessionalP;
