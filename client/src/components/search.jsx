import React, { useState, useEffect } from "react";
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [manufacturers, setManufacturers] = useState([])
  const [filteredManufactuers, setFilteredManufacturers] = (useState([]))

  useEffect(() => {
    fetchManufacturers()
  }, []) 

  useEffect(() => {
    let newFilteredManufacturers = manufacturers.filter(manufacturer => manufacturer.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredManufacturers(newFilteredManufacturers)
  }, [searchTerm, manufacturers])

  const fetchManufacturers = async () => {
    let {data} = await axios.get('http://localhost:1337/api/manufacturers')
    console.log(data)
    setManufacturers(data)
  }

  return (
    <div className="content">
      <div className="title">Candy Makers</div>
      <input
        className="searchBox"
        type="text"
        name="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {
        filteredManufactuers.map(manufacturer => {
          return (
            <div>{manufacturer.name} ({manufacturer.country})</div>
          )
        })
      }

    </div>
  );
};

export default Search;
