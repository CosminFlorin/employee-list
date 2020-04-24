import React, {Component} from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ClassEmployeeList from "./components/ClassEmployeeList"
import EmployeeList from "./components/EmployeeList";
 
 
 
// function AppHeader(props){
//   return( <header className="App-header">
 
//     The time is : {props.time.toISOString()}
//   </header>)
// }
class App  extends  Component {
  state ={
    searchTerm:" "
  }
  onSearchChange=(event) =>{
   this.setState({searchTerm:event.target.value.toLowerCase()})
  }
  render(){
   
    const time =new Date()
  return (
    <div className="App">
   <Header variant="blue">
   
     <h3>Employee directory</h3>
     
   </Header>
   
 
   <br/>
   <SearchBar handleChange={this.onSearchChange}/>
   <ClassEmployeeList searchTerm={this.state.searchTerm} otherProp={true}/>
   </div>
  );
}
}
 
export  default App;