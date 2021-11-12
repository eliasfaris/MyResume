import React, { useContext } from "react";
// import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";
import { Input, TextField } from "@material-ui/core";
import data from "../../utils/fake_data";

function Header() {
  const { content, updateHeaderData, removeFakeData } =
    useContext(ResumeContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
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
          {...register("name", { required: true })}
          id="outlined-basic"
          name="name"
          defaultValue={content.header.name}
          placeholder="Full name"
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          onChange={handleSubmit(onSubmit)}
        />
        {/* <TextField
          id="outlined-basic"
          label="Full Name"
          name="name"
          // type="name"
          variant="outlined"
          defaultValue={content.header.name}
          {...register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        /> */}
        {/* 
        <TextField
          id="outlined-basic"
          label="Address"
          name="address"
          variant="outlined"
          defaultValue={content.header.address}
          // {...register({required : true})}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="City"
          name="city"
          variant="outlined"
          defaultValue={content.header.city}
          // {...register({required : true})}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="State"
          name="state"
          variant="outlined"
          defaultValue={content.header.state}
          // {...register({required : true})}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Zip Code"
          name="zip"
          variant="outlined"
          defaultValue={content.header.zip}
          // {...register({required : true})}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Phone"
          name="phone"
          variant="outlined"
          defaultValue={content.header.phone}
          // {...register({required : true})}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="E-mail"
          name="email"
          variant="outlined"
          defaultValue={content.header.email}
          // {...register({required : true})}
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
          // {...register({required : true})}
          // inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{
            marginTop: 20,
            marginBottom: 15,
            marginLeft: 8,
            marginRight: 8,
          }}
        /> */}
        {/* <Button
          variant="contained"
          color="secondary"
          type="submit"
          style={{ margin: 8 }}
        >
          Update
        </Button> */}
      </form>
    </div>
  );
}

export default Header;
