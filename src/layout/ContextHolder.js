import React, { useState } from "react";
import { UserContext } from "../UserContext.js";
import Cookies from "js-cookie";
const ContextHolder = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default ContextHolder;
