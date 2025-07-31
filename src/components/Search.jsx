import React from 'react'
import SearchIcon from '/src/Images/search.png'


const Search = ({searchTerm, setSearchTerm , setSubmitSearch}) => {


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setSubmitSearch(searchTerm)
      setSearchTerm(''); 

    }
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    }

  

  return (
    <div className = "search">
      <div>
        <img src={SearchIcon} alt="" /> 
        <input 
        type="text"
        placeholder='Search for thousand of movies...'
        value={searchTerm} 
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        />

      </div>

    </div>
  )
}

export default Search