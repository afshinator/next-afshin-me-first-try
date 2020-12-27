import "../styles/global.css";
import {
  CSSReset,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import customTheme from "./../styles/theme";


// Pulling in custom font primarily using this example: https://chakra-ui.com/guides/with-nextjs-font-files
// but pre-loading them in the layout as per https://kirazhang.com/posts/nextjs-custom-fonts

const theme = extendTheme(customTheme)

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
