import {
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../service/api";

const useStyle = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      background: "#000000",
      color: "#ffffff",
      fontSize: 20,
    },
  },
  row: {
    "&> *": {
      fontSize: 20,
    },
  },
});

const AllUsers = () => {
  const [users, setUser] = useState([]);
  const classes = useStyle();
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const response = await getUsers();
    setUser(response.data);
  };
  const deleteUserData = async id => {
    await deleteUser(id);
    getAllUsers();
  };
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={index} className={classes.row}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${user.id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUserData(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUsers;
