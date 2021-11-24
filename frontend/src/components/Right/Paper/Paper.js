import React from "react";
import HeaderP from "./HeaderP";
import ProfessionalP from "./ProfessionalP";
import EducationP from "./EducationP";
import AdditionalSkillsP from "./AdditionalSkillsP";
import VolunteerP from "./VolunteerP";
import ProjectsP from "./ProjectsP";

function Paper() {
  return (
    <div className="">
      <div size="A4" className="page">
        <HeaderP />
        <EducationP />
        <AdditionalSkillsP />
        <ProjectsP />
        <ProfessionalP />
        <VolunteerP />
      </div>
    </div>
  );
}

export default Paper;
