import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Navigate, useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { addUser } from "../service/api";

const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});
const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};
const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  const classes = useStyle();
  const navigate = useNavigate();

  const onValuechange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };
  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add user</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={e => onValuechange(e)} name="name" value={name} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={e => onValuechange(e)}
          name="username"
          value={username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={e => onValuechange(e)} name="email" value={email} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={e => onValuechange(e)} name="phone" value={phone} />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={() => addUserDetails()}
      >
        Add User
      </Button>
    </FormGroup>
  );
};

export default AddUser;
