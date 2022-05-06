import React from 'react'
import { Box, Image, Badge,  } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'



function Card ({data, onClick=()=>{}}) {
 console.log("data", data)
  
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' onClick={onclick}>
        <Image src={data.img} /* alt={property.imageAlt} */ />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
             Zona &bull; {data.location?.name}  {data.adress} 
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {data.description}
          </Box>
          
          <Box>
            
            <Box as='span' color='gray.600' fontSize='sm'>
            $ {data.price}
            </Box>
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
        </Box>
      </Box>
    )
};

export default Card;
