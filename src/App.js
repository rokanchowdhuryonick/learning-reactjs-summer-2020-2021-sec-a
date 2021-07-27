import UserList from './components/UserList';
import {users} from './usersData';
import {useState} from 'react';
import CreateUser from './components/CreateUser';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

 const [userlist, setUserList] = useState(users);
 
 
 const addUser = (newUserData)=>{
  setUserList([...userlist, newUserData]);
 }

 const editUser = (editedUserData)=>{
  setUserList([...userlist, editedUserData]);
 }

//  const addUser = ({status, callback})=>{
  
//  }

const deleteuser = (id)=>{
  const list = userlist.filter((user)=>user.id !== id);
  setUserList(list);
}

  

  return (
   
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path='/'> 
              <h1>Welcome Home!</h1>
          </Route>
          <Route path='/userlist'>
            <div>
                <UserList list={userlist} deleteCallback={deleteuser}/>
            </div>
          </Route>
          <Route path='/create'> 
              <CreateUser status='add' callback={addUser} list={userlist} />
          </Route>
          <Route path='/edit/:id' children={<CreateUser status='edit' callback={editUser} list={userlist} />}></Route>
          <Route path='*'>
              404 not found
          </Route>          
      </Switch>
  </Router>
  );
}

export default App;
