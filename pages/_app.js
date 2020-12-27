import "../styles/global.css";
import { CSSReset, ChakraProvider, extendTheme } from "@chakra-ui/react";
import customTheme from "./../styles/theme";
import { motion } from "framer-motion";

// Pulling in custom font primarily using this example: https://chakra-ui.com/guides/with-nextjs-font-files
// but pre-loading them in the layout as per https://kirazhang.com/posts/nextjs-custom-fonts

const theme = extendTheme(customTheme);

export default function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <motion.div
        key={router.route}    // presence of this key enables the animation
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: { opacity: 0 },
          pageAnimate: { opacity: 1 },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </ChakraProvider>
  );
}
