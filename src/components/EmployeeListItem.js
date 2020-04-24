import React from "react";
 
const EmployeeListItem = props => {
  return (
    <li
    className="ListItem"
      onClick={() => {
        props.onListItemClick(props.user);
      }}
      key={props.id}
    >
    <span> {props.user.first_name} {props.user.last_name}</span> 
      <label>Manager <input type="checkbox" disabled checked={props.user.is_manager}/></label>
    </li>
  );
};
 
export default EmployeeListItem;