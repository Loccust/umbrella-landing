import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import type { AppProps } from "next/app";
import Fonts from "../components/fonts";
import theme from "../lib/theme";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
