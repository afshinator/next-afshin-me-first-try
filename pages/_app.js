import "../styles/global.css";
import {
  ThemeProvider,
  theme,
  CSSReset,
  ChakraProvider,
} from "@chakra-ui/react";
import customTheme from "./../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    // <ThemeProvider theme={customTheme}>
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
    //  </ThemeProvider>
  );
}
