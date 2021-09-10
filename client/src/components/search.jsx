import React, { useState } from 'react'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="content">
    <div className="title">Candy Makers</div>
    <input className="searchBox" type="text" name="search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
    <div className="searchTerm">{searchTerm}</div>
    </div>
  )
  }

export default Search