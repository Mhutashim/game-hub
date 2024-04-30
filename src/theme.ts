import { extendTheme,ThemeConfig } from "@chakra-ui/react"; 
// here extendTheme is a function and themeConfig is an interface 

const config: ThemeConfig = {
  initialColorMode: 'dark'
};

const theme = extendTheme({config});

export default theme;