import React, { useState } from "react";
import EmployeeListItem from "./EmployeeListItem";
const users = [
  {
    id: 1,
    first_name: "Fremont",
    last_name: "Chesswas",
    email: "framont@gmail.com"
  },
  {
    id: 2,
    first_name: "Ezri",
 
    last_name: "Bagworth",
    
    email: "ezrit@gmail.com"
  },
  {
    id: 3,
    first_name: "Arvie",
    last_name: "Copplestone",
    email: "arvie@gmail.com"
  }
];
const EmployeeList = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const[detailsTitle,setDetailsTitle]=useState("User details");
  
  const handleClick = user => {
    setSelectedUser(user);
    setDetailsTitle("User" + user.first_name + "details")
  };
 
  return (
    <div>
      <ul>
        {users.map(item => {
          return (
            <EmployeeListItem
              key={item.id}
              onListItemClick={handleClick}
              user={item}
            />
          );
        })}
        <h1>{detailsTitle}</h1>
      </ul>
      {selectedUser === null ? (
        <div>{selectedUser.email}</div>
      ) : (
        <div>Select a user to view </div>
      )}
    </div>
  );
};
 
export default EmployeeList;