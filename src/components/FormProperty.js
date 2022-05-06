import React, { useState } from "react";
import axios from "axios";
//import { set } from "immer/dist/internal";
//import { useImput } from'react';
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const FormProperty = () => {
  //const form = useImput()
  const [adress, setAdress] = useState("");
  //const [neighborhood, setNeighborhood] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const [location, setLocation] = React.useState("Caballito");
  const [category, setCategory] = React.useState("Casas");


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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("informacion enviada", adress);

    axios
      .post("http://localhost:3001/api/property/add", {
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
              className="col-lg-7"
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
              {/*     <input
          placeholder="Zona:"
          value={neighborhood}
          onChange={handleNeighborhood}
        /> */}

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
                {/*  </Stack> */}
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
            </form>
         
  );
};

export default FormProperty;
