import { createContext } from "react";

const UserContext = createContext({
  loggedinUser: "User",
});

export default UserContext;
