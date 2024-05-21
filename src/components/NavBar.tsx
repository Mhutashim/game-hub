import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  // to layout the components horizontally i will use HStack component from Chakra-ui
  return (
    // <HStack justifyContent="space-between" padding="10px"> as there is 3 component there is no need for justify the comtents
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput
        onSearch={(searchText) => onSearch(searchText)}
      ></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
