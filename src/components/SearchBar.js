import React from "react"
 
const SearchBar =(props) =>{
const {handleChange}=props;
return (
 
<div className='searchBox'>
    <input className="SearchBar" type="text" placeholder="Search" onChange={handleChange}/>
</div>
 
)
 
}
 
export default SearchBar;