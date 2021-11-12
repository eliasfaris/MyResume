import React from "react";
import HeaderP from "./HeaderP";
import ProfessionalP from "./ProfessionalP";
import EducationP from "./EducationP";
import AdditionalSkillsP from "./AdditionalSkillsP";

function Paper() {
  return (
    <div className="">
      <div size="A4" className="page">
        <HeaderP />
        <EducationP />
        <ProfessionalP />
        <AdditionalSkillsP />

      </div>
    </div>
  );
}

export default Paper;
