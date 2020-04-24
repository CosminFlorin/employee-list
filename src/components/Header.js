import React from "react"
const Header =(props)=>{
 
    return <header className={props.variant || " "}>{props.children ? props.children :props.content} </header>
   
};
 
export default Header;