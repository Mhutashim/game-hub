import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  // to layout the components horizontally i will use HStack component from Chakra-ui
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>Navbar</Text>
    </HStack>
  );
};

export default NavBar;
