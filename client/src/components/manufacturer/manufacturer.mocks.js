import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Manufacturer from './manufacturer'

export default () => {
  return (
    <BrowserRouter>
      <Manufacturer id="1" name="Cadbury" country="US"/>
    </BrowserRouter>
  )
}

