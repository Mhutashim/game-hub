import { extendTheme,ThemeConfig } from "@chakra-ui/react"; 
// here extendTheme is a function and themeConfig is an interface for that function


// creating a configuration obj and anotating to the interface
const config: ThemeConfig = {
  initialColorMode: 'dark'
};

const theme = extendTheme({config});

export default theme;