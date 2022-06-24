import React from "react";
import { Box, Image, Badge, Button } from "@chakra-ui/react";
import { StarIcon, AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Card({ data, onClick }) {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    console.log("expand", expand);
    setExpand(!expand);
  };
  const user = useSelector((state) => state.user);

  const addToFavorites = () => {
    console.log("es el ID", data.id)
    console.log("estes el user ID", user.id)
    axios.put("http://localhost:3001/api/property/putAddToFavorite", {
      id: data.id,
      userId: user.id,
    });
  };
  return (
    <Box
      w={expand ? "md" : `225px`}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={onClick || handleExpand}
    >
      <Image src={data ? data.img : ""} /* alt={property.imageAlt} */ />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
            display="flex"
            style={{ flexWrap: "nowrap" }}
          >
            <Box style={{ width: "45px" }}>Zona &bull;</Box>
            <Box> {data.location?.name}</Box>
          </Box>
        </Box>
        <Box>{data.adress} </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {data.description.substring(0, 20) + "..."}
        </Box>

        <Box>
          <Box as="span" color="gray.600" fontSize="sm">
            $ {data.price}
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(1)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < data.available ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {data.available} Disponible
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={addToFavorites}>
          <AddIcon color={"red.300"} />
        </Button>
      </Box>
    </Box>
  );
}

export default Card;
