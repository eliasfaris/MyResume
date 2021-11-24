import React, { useContext } from "react";
// import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";
import { Input, TextField } from "@material-ui/core";

function Header() {
  const { content, updateHeaderData} =
    useContext(ResumeContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    updateHeaderData(data);
  };

  return (
    <div className="">
      <h2>Header</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        // onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-basic"
          label="Full Name"
          name="name"
          variant="outlined"
          defaultValue={content.header.name}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          name="phone"
          variant="outlined"
          defaultValue={content.header.phone}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="E-mail"
          name="email"
          variant="outlined"
          defaultValue={content.header.email}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Personal Links"
          name="plink"
          variant="outlined"
          defaultValue={content.header.plink}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Personal Links"
          name="plink2"
          variant="outlined"
          defaultValue={content.header.plink2}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-multiline-static"
          label="Summary"
          name="summary"
          multiline
          rows={7}
          variant="outlined"
          defaultValue={content.header.summary}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{
            marginTop: 20,
            marginBottom: 15,
            marginLeft: 8,
            marginRight: 8,
          }}
        />
      </form>
    </div>
  );
}

export default Header;
