import React, { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import Spinner from "./components/spinnerloading";
import Search from "./components/seacrhform";
import "./index.css";
import Description from "./components/listdescription";
import Users from "./components/all_users";
import {
  styleContext,
  editContext,
  updatedUserContext,
  addUserContext,
} from "./components/context";
import Edit from "./components/edit_form";
import About from "./components/about";

const url = "https://reqres.in/api/users?page=2";

function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [userupdate, setUserUpdate] = useState({});
  const [addUser, setAddUser] = useState({});

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

  return loading ? (
    <Spinner />
  ) : (
    <>
      <styleContext.Provider value={[selected, setSelected]}>
        <editContext.Provider value={[userInfo, setUserInfo]}>
          <updatedUserContext.Provider value={[userupdate, setUserUpdate]}>
            <addUserContext.Provider value={[addUser, setAddUser]}>
              <Header />
              <Description />
              <Search users={users} />
              <Users users={users} />
              <Edit />
              <About />
            </addUserContext.Provider>
          </updatedUserContext.Provider>
        </editContext.Provider>
      </styleContext.Provider>
    </>
  );
}
export default App;
