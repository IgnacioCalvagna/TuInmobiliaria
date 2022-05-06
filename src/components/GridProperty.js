import { SimpleGrid, Box } from "@chakra-ui/react";
import "../style/Grid.css";
import Card from "./Card";
import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';

const GridProperty = () => {
 
   const [property, setProperty] = useState([]); 

  console.log("esta es la data", property)
  
  useEffect(() => {
    axios.get('http://localhost:3001/api/property/getAllProperty').then(res => setProperty(res.data));
  }, []);
 
  return (
    <div  className='container d-flex justify-content-center mt-50 mb-50' >
      <div className='row' style={{minWidth: '100%', flexWrap: 'wrap', justifyContent: 'center'}} >
        {property?.map((data, i) => (
          	console.log("esta es la data", data),
          <div  className='col-lg-3'  key={i}>
            <Card data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridProperty;


