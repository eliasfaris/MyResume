import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";

function Volunteer() {
  const { content, updateVolunteerData } =
    useContext(ResumeContext);
  const [setBtnText] = useState("Add");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    updateVolunteerData(data);
    setBtnText("Update");
  };

  return (
    <div className="">
      <h2>Volunteer Experience</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-basic"
          label="Volunteer 1"
          name="volunteer1"
          variant="outlined"
          defaultValue={content.volunteer[0]}
          inputRef={register({
            max: {
              value: 3,
              message: "error message", 
            },
          })}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Volunteer 2"
          name="volunteer2"
          variant="outlined"
          defaultValue={content.volunteer[1]}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
      </form>
    </div>
  );
}

export default Volunteer;
