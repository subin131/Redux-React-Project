import { useDispatch, useSelector } from "react-redux";
import Login from "./Test1/Login";
import Registration from "./Test1/Registration";
import UserField from "./Test2/user";
import UserList from "./Test2/watchUser";

function App() {
  const dispatch = useDispatch("");
  const users = useSelector((state) => state.users);

  //handle delete user
  const handleDelete = () => {
    dispatch({
      type: "DELETE",
      payload: {},
    });
  };

  const userList = useSelector((state) => state.userList);
  console.log("dfd", { users });
  return (
    <div className="App">
      <h1>Registration -Test 1</h1>
      <Registration />
      {users.map((user) => (
        <div>
          <h1>{user.fname}</h1>
          <button onClick={handleDelete}>Delete</button>
          <button>Edit</button>
        </div>
      ))}

      {/* <h1>Login -Test 1</h1>
      <Login /> */}
      {/* <h1>Add user -Test 2</h1>
      <UserField />
      <h1>Watch User List -Test 2</h1>
      {userList.map((user) => (
        <div>
          <h1>{user.fname}</h1>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      ))} */}
      {/* <UserList {...userList.map((user) => <h1>name:{user.fname}</h1>)} /> */}
    </div>
  );
}

export default App;
