/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { useParams } from 'react-router-dom';
=======
>>>>>>> Solution for part three
import axios from 'axios'
import "./productpage.css";
import GoBack from "../../components/goback/goback";
import ManufacturerDetails from "../../components/manufacturerinfo/manufacturersinfo";
import NotFound from "../../components/error/error";
import Product from "../../components/product/product";
import Title from "../../components/title/title";

export default (props) => {
  const [manufacturer, setManufacturer] = useState({});
  const [productList, setProductList] = useState([]);

<<<<<<< HEAD
  const { manufacturerId } = useParams();
=======
  const { manufacturerId } = props.match.params
>>>>>>> Solution for part three

  const retrieveManufacturers = async (incomingId) => {
    if (!Number(incomingId)) return { id: 0, details: {}, products: [] }
  
    const { id, name, country, products } = await fetchProductsForManufacturer(incomingId)

    if (!id || !name || !country || !products) return { id: 0, details: {}, products: [] }


    return { id, products, details: { id, name, country } }
  }

  const fetchProductsForManufacturer = async (id) => {
      const { data } = await axios.get(`http://localhost:1337/api/manufacturers/${id}`) // eslint-disable-line no-undef
      return data
  }

  const pullData = async (incomingId) => {
    const { details, products } = await retrieveManufacturers(incomingId);
    setManufacturer(details);
    setProductList(products);
  }

  const extractYear = (year) => year.split("-")[0];

  useEffect(() => {
    pullData(manufacturerId);
  }, []);

  return (
    <div className="products">
      <Title />
      <GoBack />
      {manufacturerId ? (
        <>
          <ManufacturerDetails
            name={manufacturer.name}
            country={manufacturer.country}
          />
          {productList.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              year={extractYear(product.yearIntroduced)}
            />
          ))}
        </>
      ) : (
        <NotFound message="Sorry, I don't know that manufacturer" />
      )}
    </div>
  );
};
