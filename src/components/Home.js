import { AspectRatio, Image } from '@chakra-ui/react';
import React from 'react'


const Home = () => {
  return (
    <div>

<AspectRatio maxW='1100px' ratio={6 / 3}  >
  <Image src='https://img.freepik.com/foto-gratis/mano-que-elige-modelo-casa-madera-mini-modelo-mesa-madera_42691-165.jpg?size=626&ext=jpg&ga=GA1.2.710914206.1649447987' />
 


</AspectRatio>

    </div>
  )
}

export default Home

