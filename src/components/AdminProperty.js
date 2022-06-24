import React from "react";
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
import FormEditProperty from "./FormEditProperty";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const AdminProperty = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [property, setProperty] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/property/getAllProperty")
      .then((res) => {
        console.log(res.data);
        setProperty(res.data);
      });
  }, []);

  return (
    <div className="d-flex" style={{ justifyContent: "center" }}>
     
      {property.length ? (
        property.map((element) => {return( <>
          <Card data={element} onClick={onOpen} />
          <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormEditProperty data={element} />
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal></>)})
      ) : null}

    </div>
  );
};
export default AdminProperty;
