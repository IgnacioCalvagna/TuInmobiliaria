
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from "@chakra-ui/react";
  import { useDisclosure } from "@chakra-ui/react";
import FormProperty from './FormProperty';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from "./Card";


const AdminProperty = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [property, setProperty] = useState([]); 
    
    useEffect(() => {
      axios.get('http://localhost:3001/api/property/getAllProperty').then(res => setProperty(res.data));
    }, []);
   

return (
  <div className="d-flex" style={{ justifyContent: "center" }}>
      return
        {/* <Button
          onClick={ onOpen }
          m={4}
        >Modificar Propiedades</Button> */}
<Card data={property[0]} onClick={ onOpen } />
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <FormProperty />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>  
);
}
export default AdminProperty;