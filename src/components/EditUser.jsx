import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useParams, useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { editUser, getUsers } from "../service/api";

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
const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  const { id } = useParams();

  const classes = useStyle();
  const navigate = useNavigate();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const onValuechange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    await editUser(id, user);
    navigate("/all");
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Edit user</Typography>
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
        onClick={() => editUserDetails()}
      >
        Edit User
      </Button>
    </FormGroup>
  );
};

export default EditUser;
