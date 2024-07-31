import React, { useEffect, useRef } from "react";
import {mount} from "editUsers/EditUsersModule";
import "./EditUsers.css";

const EditUsers = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount();  
  }, []);   
  return <div><app-root></app-root></div>;
};

export default EditUsers;