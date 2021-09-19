/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default ({ id, name, year }) => (
  <div className="product" key={id}>
    {`${name} (${year})`}
  </div>
)