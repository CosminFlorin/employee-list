import React, { Component } from "react"
import EmployeeListItem from "./EmployeeListItem"
 
const user = [
    {
        id: 1,
        first_name: "Fremont",
        last_name: "Chesswas",
        email: "framont@gmail.com",
        is_manager: true,
        hire_year: 2010,
        color:"green"
    },
    {
        id: 2,
        first_name: "Ezri",
        last_name: "Bagworth",
        email: "ezrit@gmail.com",
        is_manager: false,
        hire_year: 2012,
        color:"black"
    },
    {
        id: 3,
        first_name: "Arvie",
        last_name: "Copplestone",
        email: "arvie@gmail.com",
        is_manager: true,
        hire_year: 2018,
        color:"blue"
    }
];
 
class ClassEmployeeList extends Component {
 
    constructor(props){
        super(props)
        this.state = {
            detailsTitle: "",
            selectedUser: {},
            showManagers: false,
            showEveryone: false,
            yearFilter: ""
        }
}
 
    handleClick = user => this.setState({
        selectedUser: user,
        detailsTitle: "User " + user.first_name
    })
 
    handleYearChange = event => this.setState({
        yearFilter: parseInt(event.target.value) || ''
    })
 
    render() {
         
        const { selectedUser, detailsTitle, showManagers, showEveryone, yearFilter } = this.state
        const { searchTerm } = this.props
 
        let list = user
            .filter( item => (item.first_name +' '+ item.last_name).toLowerCase().includes( searchTerm.toLowerCase() ))
            .filter( item => !yearFilter || yearFilter === item.hire_year )
 
        if ( !showEveryone )
            list = list.filter( item => ( item.is_manager && showManagers ) || ( !item.is_manager && !showManagers ) )
       
        list = list.map( item => (
            <EmployeeListItem
                key={item.id}
                onListItemClick={this.handleClick}
                user={item}
            />
        ))
 
        return (
            <div>
                <p>
 
                    <input id="filter_managers" type="radio" name="filter" checked={showManagers && !showEveryone}
                        onChange={() => this.setState({ showManagers: true, showEveryone: false })}
                    />
                    <label htmlFor="filter_managers">Only managers</label>
                   
                    <input id="filter_employees" type="radio" name="filter" checked={!showManagers && !showEveryone}
                        onChange={() => this.setState({ showManagers: false, showEveryone: false })}/>
                    <label htmlFor="filter_employees">Only employees</label>
 
                    <input id="filter_everyone" type="radio" name="filter" checked={showEveryone}
                        onChange={() => this.setState({ showEveryone: true })}
                    />
                    <label htmlFor="filter_everyone">Everyone</label>
                   
                   
                </p>
                <p>
                    <label htmlFor="year">Filter by hire year</label>
                    <select id="year" onChange={this.handleYearChange} defaultValue="">
                        <option value="">All years</option>
                        {user.map(item =>
                            <option key={item.id}value={item.hire_year}>
                                {item.hire_year}
                            </option>
                        )}
                    </select>
                </p>
                <h1>{detailsTitle}</h1>
                <div className="lista">{list}</div>
               
                <div>Search term: {searchTerm}</div>
                {selectedUser.id ?
                    <div>{selectedUser.email}</div>
                    :
                    <div>Select a user to view</div>
                }
            </div>
        )
    }
}
 
export default ClassEmployeeList