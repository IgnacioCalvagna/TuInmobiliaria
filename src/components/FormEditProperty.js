import React, { useState } from "react";
import axios from "axios";
//import { set } from "immer/dist/internal";
//import { useImput } from'react';
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const FormEditProperty = ({ data }) => {

  useEffect(() => {console.log("que es data",data)},[]);
  const [adress, setAdress] = useState(data.adress);
  const [description, setDescription] = useState(data.description);
  const [price, setPrice] = useState(data.price);
  const [available, setAvailable] = useState(data.available);
  const [img, setImg] = useState(data.img);
  const navigate = useNavigate();
  const [location, setLocation] = useState(data.location?data.location.name :'');
  const [category, setCategory] = useState(data.category.name); 

  const handleAdress = (e) => {
    setAdress(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleAvailable = (e) => {
    setAvailable(e.target.value);
  };

  const handleImg = (e) => {
    setImg(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
    const handleCategory = (e) => {
      setCategory(e.target.value);
    };

    const handleDelete = () => {
    
      axios
      .delete(`http://localhost:3001/api/property/deleteById/${data.id}`).then((data) => {})
    };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios
      .put(`http://localhost:3001/api/property/putEditById/${data.id}`, {
        adress,
        location,
        description,
        price,
        available,
        img,
        category,
      })
      .then((res) => res.data)
      .then((data) => navigate("/"));
    //.catch(err) => console.log(err);
  };

  return (
    
            <form
              //className="col-lg-7"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              onSubmit={handleSubmit}
            >
              <input
                placeholder="Direccion:"
                value={adress}
                onChange={handleAdress}
              />

              <RadioGroup onChange={setLocation} value={location}>
                <div>
                  <Radio value="Caballito">Caballito</Radio>
                  <Radio value="Colegiales">Colegiales</Radio>
                  <Radio value="Palermo">Palermo</Radio>
                </div>
              </RadioGroup>

              <RadioGroup onChange={setCategory} value={category}>
                <div>
                  <Radio value="Casas">Casas</Radio>
                  <Radio value="PH Remodelados">PH Remodelados</Radio>
                  <Radio value="Departamentos">Departamentos</Radio>
                </div>
          
              </RadioGroup>

              <input
                placeholder="Descripcion:"
                value={description}
                onChange={handleDescription}
              />
              <input
                placeholder="Precio:"
                value={price}
                onChange={handlePrice}
              />
              <input
                placeholder="Disponibilidad"
                value={available}
                onChange={handleAvailable}
              />
              <input placeholder="Img:" value={img} onChange={handleImg} />

              <button
                className="button is-link my-5"
                type="submit"
                onClick={handleSubmit}
              >
                Agregar
              </button>

              <button
                className="button is-link my-5"
                //type="submit"
                onClick={handleDelete}
              >
                Borrar
              </button>
            </form>
         
  );
};

export default FormEditProperty;
