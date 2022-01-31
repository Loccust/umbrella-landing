import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";

const Main = (props:any) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Umbrella Academy</title>
      </Head>

      <Container maxW="container.xl" p={0}>
        {props.children}
      </Container>
    </Box>
    );
};
export default Main;
