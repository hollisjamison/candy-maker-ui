/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './manufacturersinfo.css'

export default ({ name, country }) => (
  <div className="detail">{`${name} (${country})`}</div>
)