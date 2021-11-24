import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";

function Volunteer() {
  const { content, updateVolunteerData, removeFakeData } =
    useContext(ResumeContext);
  const [btnText, setBtnText] = useState("Add");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
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
          label=""
          name="skill1"
          variant="outlined"
          defaultValue={content.volunteer[0]}
          inputRef={register({
            max: {
              value: 3,
              message: "error message", // <p>error message</p>
            },
          })}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        {/*          {...register("message", {
            required: "Required",
          })} */}
        <TextField
          id="outlined-basic"
          label=""
          name="skill2"
          variant="outlined"
          defaultValue={content.volunteer[1]}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label=""
          name="skill3"
          variant="outlined"
          defaultValue={content.volunteer[2]}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label=""
          name="skill4"
          variant="outlined"
          defaultValue={content.volunteer[3]}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label=""
          name="skill5"
          variant="outlined"
          defaultValue={content.volunteer[4]}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        {/* <Button
          variant="contained"
          color="secondary"
          type="submit"
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        >
          {btnText}
        </Button> */}
      </form>
    </div>
  );
}

export default Volunteer;
