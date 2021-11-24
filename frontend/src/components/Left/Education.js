import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";

function Education() {
  const { content, updateEducationData, removeFakeData } =
    useContext(ResumeContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateEducationData(data);
  };

  return (
    <div className="">
      <h2>Education</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-basic"
          label="Institution"
          name="institution"
          variant="outlined"
          defaultValue={content.education.institution}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="City, State"
          name="city"
          variant="outlined"
          defaultValue={content.education.city}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Major"
          name="major"
          variant="outlined"
          defaultValue={content.education.major}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Graduation Month & Year"
          name="gradYear"
          variant="outlined"
          defaultValue={content.education.gradYear}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="GPA"
          name="gpa"
          variant="outlined"
          defaultValue={content.education.gpa}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Relevant Courses (class 1, class 2, ...)"
          name="additional"
          variant="outlined"
          defaultValue={content.education.additional}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
      </form>
    </div>
  );
}

export default Education;
