import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";

function Projects() {
  const { content, updateProjectsData} =
    useContext(ResumeContext);
  const [btnText, setBtnText] = useState("Add");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    updateProjectsData(data);
    setBtnText("Update");
  };
  return (
    <div className="">
      <h2>Projects</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4>Project 1</h4>
        <TextField
          id="outlined-basic"
          label="Project Name"
          name="project1"
          variant="outlined"
          defaultValue={content.projects.project1}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Position"
          name="position1"
          variant="outlined"
          defaultValue={content.projects.position1}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Month & Year"
          name="finish1"
          variant="outlined"
          defaultValue={content.projects.finish1}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Description"
          name="desc1[0]"
          variant="outlined"
          defaultValue={content.projects.desc1[0]}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc1[1]"
          variant="outlined"
          defaultValue={content.projects.desc1[1]}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc1[2]"
          variant="outlined"
          defaultValue={content.projects.desc1[2]}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{
            marginTop: 12,
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 15,
          }}
        />

        <hr />

        <h4>Project 2</h4>

        <TextField
          id="outlined-basic"
          label="Project 2"
          name="project2"
          variant="outlined"
          defaultValue={content.projects.project2}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Position"
          name="position2"
          variant="outlined"
          defaultValue={content.projects.position2}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Month & Year"
          name="finish2"
          variant="outlined"
          defaultValue={content.projects.finish2}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Description"
          name="desc2[0]"
          variant="outlined"
          defaultValue={content.projects.desc2[0]}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc2[1]"
          variant="outlined"
          defaultValue={content.projects.desc2[1]}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc2[2]"
          variant="outlined"
          defaultValue={content.projects.desc2[2]}
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

export default Projects;
