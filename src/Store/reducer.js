import { createStore } from "redux";
const initialState = {
  users: [],
  userList: [
    {
      fname: "Ram",
      lname: "karki",
      mobile: "234567",
      gender: "male",
      email: "ram@gmail.com",
      password: "12345",
    },
    {
      fname: "Gopal",
      lname: "Thapa",
      mobile: "234567434",
      gender: "male",
      email: "gopal@gmail.com",
      password: "1345",
    },
    {
      fname: "Sita",
      lname: "karki",
      mobile: "234567",
      gender: "mfeale",
      email: "sita@gmail.com",
      password: "14dff5",
    },
    {
      fname: "Gita",
      lname: "kc",
      mobile: "2354367",
      gender: "femalmale",
      email: "gita@gmail.com",
      password: "12345",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "ADDUSER":
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    case "WATCHUSER":
      return {
        ...state,
        userList: action.payload,
      };
    case "DELETE":
      return {
        users: [...state.users.filter((user) => user !== action.payload)],
      };
    case "DELETEUSER":
      return {
        userList: [...state.userList.filter((user) => user !== action.payload)],
      };
    default:
      return state;
  }
};
export default createStore(reducer);
