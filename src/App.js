import React , {useState , useEffect} from 'react'
import Header from './components/Header';
import Spinner from './components/spinnerloading';
import Search from './components/seacrhform'
import './index.css'
import Description from './components/listdescription';
import Users from './components/all_users';
import {styleContext , editContext , updatedUserContext} from './components/context'
import Edit from './components/edit_form';
import About from './components/about';

function App() {

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [selected, setSelected] = useState('')
  const url = 'https://reqres.in/api/users?page=2'
  const [userInfo , setUserInfo] = useState({})
  const [userupdate , setUserUpdate] = useState({})
  const getUsers = async () => {
    const response = await fetch(url)
    const all_users = await response.json()
    setUsers(all_users.data)
  }

  useEffect(() => {
    getUsers()
    setLoading(false)
  }, [url])


  if (loading)
  {
     return (
      <Spinner />
    );
  }
  else
  {
    return (
      <>
        <styleContext.Provider value={[selected, setSelected]}>
          <editContext.Provider value={[userInfo, setUserInfo]}>
            <updatedUserContext.Provider value={[userupdate , setUserUpdate]}>
              <Header />
              <Description />
              <Search users={users}/>
              <Users users={users} />
              <Edit />
              <About />    
            </updatedUserContext.Provider>
          </editContext.Provider>
        </styleContext.Provider>
      </>
    );
  }
}
export default App;
