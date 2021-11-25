import React, { createContext, useState, useEffect } from "react";

export const ResumeContext = createContext();

const ResumeContextProvider = (props) => {
  var currentUser = localStorage.getItem("currUser");
  console.log(currentUser);
  const [content, setContent] = useState(
    JSON.parse(localStorage.getItem(currentUser))
    // || {
    //   header: {},
    //   professional: { desc1: ["", "", ""], desc2: ["", "", ""] },
    //   projects: { desc1: ["", "", ""], desc2: ["", "", ""] },
    //   education: {},
    //   additional: [],
    //   volunteer: [],
    // }
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

  console.log("Line 47");
  console.log(localStorage.getItem(currentUser));

  useEffect(() => {
    const savedData = localStorage.getItem(currentUser);
    console.log(savedData);
    if (savedData) {
      setContent(JSON.parse(savedData));
    }
  }, []);
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
      {/* This refers to the children that this provider/components wraps. */}
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
