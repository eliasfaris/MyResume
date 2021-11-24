import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";

function AdditionalSkills() {
  const { content, updateAdditionalData, removeFakeData } = useContext(
    ResumeContext
  );
  const [btnText, setBtnText] = useState("Add");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateAdditionalData(data);
    setBtnText("Update");
  };

  return (
    <div className="">
      <h2>Abilities</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4>Skills</h4>
        <TextField
          id="outlined-basic"
          label="Skills (skill1, skill2, ...)"
          name="skills"
          variant="outlined"
          defaultValue={content.skills}
          inputRef={register({
            max: {
              value: 3,
              message: "error message" // <p>error message</p>
              
            },
          })}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
      </form>
          
          <hr />
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        
        <h4>Tools</h4>
        <TextField
          id="outlined-basic"
          label="Tools (tool1, tool2, ...)"
          name="tools"
          variant="outlined"
          defaultValue={content.tools}
          inputRef={register({
            max: {
              value: 3,
              message: "error message" // <p>error message</p>
              
            },
          })}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
      </form>
    </div>
  );
}

export default AdditionalSkills;
