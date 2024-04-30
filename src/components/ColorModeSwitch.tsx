import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  // hook From chakra-ui
  const { toggleColorMode, colorMode } = useColorMode();
  // Here, toggleColorMode is a function and colorMode represent the current color.

  return (
    <HStack>
      <Switch
        colorScheme="green" // checked state will be represented by green color.
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode} //built-in function to change color
      ></Switch>
      {/* if the current mode is dark then the switch will be checked */}
      <Text> {colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
