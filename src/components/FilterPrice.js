import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import  Card from "./Card";

const FilterPrice = () => {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    const Storage = localStorage.getItem("storage");
    console.log(Storage);
    axios.get(`http://localhost:3001/api/property/getByLowerPrice`)
    .then(res => {console.log("res", res)
      setProperties(res.data)})
  },[])
  return (
    <div  className='container d-flex justify-content-center mt-50 mb-50' >
    <div className='row' style={{minWidth: '100%', flexWrap: 'wrap', justifyContent: 'center'}} >
      {properties?.map((data, i) => (
          console.log("esta es la data", data),
        <div  className='col-lg-3'  key={i}>
          <Card data={data} />
        </div>
      ))}
    </div>
  </div>  )
}

export default FilterPrice;