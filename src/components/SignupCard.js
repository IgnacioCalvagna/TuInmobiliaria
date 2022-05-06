 import React from 'react'; 
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
     import axios from "axios";
     import { useNavigate } from "react-router-dom";
     import { sendSignUpRequest } from "../redux/action/user";
     import { useDispatch, useSelector } from "react-redux";

     function SignupCard() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    //const user = useSelector(state => state.user);

  //const validateEmail = email => {
/*     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    alert('You have entered an invalid email address!');
    return false;
  };


  const validateString = str => {
    if (/^[a-z ,.'-]+$/i.test(str)) {
      return true;
    }
    alert('Your name or lastname is not valid!');
    return false;
  };  
 */
    const handleChangeFirstName = (e) => {
      setFirstName(e.target.value);
    }
    const handleChangeLastName = (e) => {
      setLastName(e.target.value);
    }
    const handleChangeEmail = (e) => {
      setEmail(e.target.value);
    };
  
    const handleChangePassword = (e) => {
      setPassword(e.target.value);
    };
const handleSubmit = (e) => {
       e.preventDefault();
/* 
    if (validateString(firstName.value)) return;
    if (validateString(lastName.value)) return;
    if (validateEmail(email.value)) return;
   */
       dispatch(
         sendSignUpRequest({
          firstName, lastName, email, password
         })
       )
       /* .then(user =>
        dispatch(
          sendLoginRequest({ email: user.email, password: user.password })
        )
      )  */
       .then (() => navigate("/")) 
      /*  .then(() => {
        window.location.reload(false);
      });  */ 

        //.catch((err) => console.log("error", err));
     };

     return (
       <Flex type="module"
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl 
                  id="firstName" isRequired
                  onChange={handleChangeFirstName}>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl 
                  id="lastName"
                  onChange={handleChangeLastName}>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl
               id="email" isRequired
               onChange={handleChangeEmail}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl 
              id="password" isRequired
              onChange={handleChangePassword}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={handleSubmit}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to="/user/login" color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex> 
    );
  }

  export default SignupCard;