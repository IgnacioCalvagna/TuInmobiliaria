import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Logo } from './Logo'
import "../style/Footer.css";

 const Footer = () => (
  <Container
   className="footer"
    as="footer"
    role="contentinfo"
    py={{
      base: '12',
      md: '2',
    }}
  >
    <Stack
      
        spacing={{
        base: '2',
        md: '3',
      }}
    >
      <Stack justify="space-between" direction="row" align="center">
      
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
         &copy; {new Date().getFullYear()}  Design IT. All rights reserved.
      </Text>
    </Stack>
  </Container>
)
export default Footer;