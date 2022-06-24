import { SimpleGrid, Box } from "@chakra-ui/react";
import "../style/Grid.css";
import Card from "./Card";
import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDisclosure } from "@chakra-ui/react";
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
import { StarIcon } from '@chakra-ui/icons';

const GridProperty = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
  <Card data={data} onClick={onOpen} />
          <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <img src={data.img}/>
                <Box> {data.location?.name}  
              </Box>
              <Box>{data.adress} </Box>
              <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {data.description}
          </Box>
          <Box as='span' color='gray.600' fontSize='sm'>
            $ {data.price}
            </Box>
            <Box display='flex' mt='2' alignItems='center'>
             {Array(1)
              .fill('')
              .map((_, i) => (
                
                 <StarIcon
                  key={i}
                  color={i < data.available ? 'teal.500' : 'gray.300'}
                />  
             )) } 
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {data.available} Disponible
            </Box>
          </Box>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>          </div>
        ))}
      </div>
    </div>
  );
};

export default GridProperty;


