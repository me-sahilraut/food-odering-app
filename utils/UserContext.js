import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Sahil Raut",
    email: "sahilgraut@gmail.com",
  },
});

export default UserContext;
