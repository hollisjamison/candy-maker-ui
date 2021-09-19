/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { NavLink } from "react-router-dom";
import "./manufacturer.css";

export default ({ id, name, country }) => (
  <div className="manufacturer" key={id}>
    <NavLink to={`/products/${id}`}>{`${name} (${country})`}</NavLink>
  </div>
);
