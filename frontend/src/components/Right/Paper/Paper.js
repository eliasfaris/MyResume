import React from "react";
import HeaderP from "./HeaderP";
import ProfessionalP from "./ProfessionalP";
import EducationP from "./EducationP";
import AdditionalSkillsP from "./AdditionalSkillsP";
import VolunteerP from "./VolunteerP";

function Paper() {
  return (
    <div className="">
      <div size="A4" className="page">
        <HeaderP />
        <EducationP />
        <ProfessionalP />
        <AdditionalSkillsP />
        <VolunteerP />
      </div>
    </div>
  );
}

export default Paper;
