import React, { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import Spinner from "./components/spinnerloading";
import Search from "./components/seacrhform";
import "./index.css";
import Description from "./components/listdescription";
import Users from "./components/all_users";
import { message } from "antd";
import { styleContext } from "./components/context";
import Adduser from "./components/add_form";
import About from "./components/about";

const url = "https://reqres.in/api/users?page=2";

function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState("");

  const successDelete = () => {
    message.success("User deleted successfully!!");
  };
  const successUpdate = () => {
    message.success("User updated successfully!!");
  };
  const successAdd = () => {
    message.success("User added successfully!!");
  };

  const getUsers = useMemo(
    () => async () => {
      const response = await fetch(url);
      const all_users = await response.json();
      setUsers(all_users.data);
    },
    []
  );

  useEffect(() => {
    getUsers();
    setLoading(false);
  }, [getUsers]);

  const updateUsersInformations = (information) => {
    console.log(information);
    console.log(users);
    setUsers(
      users.map((user) => {
        if (user.id === information.id) {
          user.first_name = information.first_name;
          user.last_name = information.last_name;
          user.email = information.email;
        }
        return user;
      })
    );
    successUpdate();
  };

  const deleteUserFunc = (id) => {
    setUsers(
      users.filter((user) => {
        return user.id !== id;
      })
    );
    successDelete();
  };

  const addUserFunc = (newUser) => {
    users.push(newUser);
    setUsers(
      users.map((user) => {
        return user;
      })
    );
    successAdd();
  };
  return loading ? (
    <Spinner />
  ) : (
    <>
      <styleContext.Provider value={[selected, setSelected]}>
        <Header />
        <Description />
        <Search users={users} />
        <Users
          users={users}
          updateCallbackfunc={updateUsersInformations}
          deleteUserFunc={deleteUserFunc}
        />
        <Adduser addUserfunc={addUserFunc} />
        <About />
      </styleContext.Provider>
    </>
  );
}
export default App;
