/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Manufacturer from '../../components/manufacturer/manufacturer'
import Search from '../../components/search/search'
import Title from '../../components/title/title'
import './manufacturerspage.css'

export default () => {
  const [manufacturerList, setManufacturerList] = useState([])
  const [filteredManufacturerList, setFilteredManufacturerList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchManufacturers()
  }, []) 

  const fetchManufacturers = async () => {
    let {data} = await axios.get('http://localhost:1337/api/manufacturers')
    console.log(data)
    setManufacturerList(data)
    setFilteredManufacturerList(data)
  }

  useEffect(() => {
    const filtered = filterManufacturers(manufacturerList, searchTerm)

    setFilteredManufacturerList(filtered)
  }, [searchTerm])

  const filterManufacturers = (list, term) => list.filter(manufacturer => (
    manufacturer.name.toLowerCase().includes(term.toLowerCase())
  ))

  return (
    <div className="manufacturers">
      <Title />
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filteredManufacturerList.map(manufacturer => (
          <Manufacturer
            key={manufacturer.id}
            id={manufacturer.id}
            name={manufacturer.name}
            country={manufacturer.country}
          />
        ))
      }
    </div>
  )
}