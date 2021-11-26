import React, { createContext, useState, useEffect } from "react";

export const ResumeContext = createContext();

const ResumeContextProvider = (props) => {
   var currentUser = localStorage.getItem("currUser"); 

   const [content, setContent] = useState(
    JSON.parse(localStorage.getItem(currentUser)) || {
      header: {},
      professional: { desc1: ["", "", ""], desc2: ["", "", ""] },
      projects: { desc1: ["", "", ""], desc2: ["", "", ""] },
      education: {},
      additional: [],
      volunteer: [],
    }
  );

  function updateHeaderData(data) {
    setContent({ ...content, header: data });
  }

  function updateProfessionalData(data) {
    setContent({ ...content, professional: data });
  }

  function updateEducationData(data) {
    setContent({ ...content, education: data });
  }

  function updateAdditionalData(data) {
    setContent({ ...content, additional: data });
  }

  function updateVolunteerData(data) {
    setContent({ ...content, volunteer: Object.values(data) });
  }

  function updateProjectsData(data) {
    setContent({ ...content, projects: data });
  }

  function saveUserInfo() {
    setContent();
  }

  useEffect(() => {
    localStorage.setItem(currentUser, JSON.stringify(content));
  }, [content]);

  return (
    <ResumeContext.Provider
      value={{
        content,
        setContent,
        updateHeaderData,
        updateProfessionalData,
        updateEducationData,
        updateAdditionalData,
        updateVolunteerData,
        updateProjectsData,
        saveUserInfo,
      }}
    >
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
