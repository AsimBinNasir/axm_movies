import React from 'react'
import SearchIcon from '/src/Images/search.png'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className = "search">
      <div>
        <img src={SearchIcon} alt="" />

        <input 
        type="text"
        placeholder='Search for thousand of movies...'
        value={searchTerm} 
        onChange={(event)=> setSearchTerm(event.target.value)}
        />
      </div>

    </div>
  )
}

export default Search