import {
  Box,
  Text,
  Flex,
  VStack,
  Button,
  Stack,
  Image,
} from "@chakra-ui/react";
import theme from "../lib/theme";
import Transition from "./transition";
import NextLink from "next/link";
import { Link } from "react-scroll";

const HeroSection = () => {
  const heroImg = "/images/hero-image.png";
  const logoImg = "/images/logo.png";
  const dotsImg = "/images/dots.png";

  return (
    <>
      <Box
        position="absolute"
        background="conic-gradient(from 192deg at 44.77% 38%, #6842B8 -54.94deg, #F7B918 28.29deg, #FFFFFF 132.36deg, #F7B918 205.59deg, #6842B8 305.06deg, #F7B918 388.29deg);"
        style={{ filter: "blur(200px)" }}
        opacity={{ base: 0.2, md: 0.75 }}
        borderRadius="50%"
        top={-75}
        left={-75}
        w={400}
        h={400}
      />
      <Box
        style={{ filter: "blur(100px)" }}
        backgroundColor="#8F69DE"
        position="absolute"
        borderRadius="50%"
        opacity={0.15}
        top="55vh"
        right={0}
        w={300}
        h={300}
      />

      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        h={{ base: "100%", md: "100vh" }}
        align="center"
        pt="5%"
      >
        <VStack
          align={{ base: "center", md: "flex-end" }}
          justify="center"
          w="full"
          p={10}
        >
          <Image
            w={{ base: 150, md: 175 }}
            alt="UMBRELLA ACADEMY"
            draggable={false}
            src={logoImg}
          />
          <Box
            w={{ base: "full", md: "65%" }}
            py={{ base: 5, md: 10 }}
            px={{ base: 3, md: 0 }}
          >
            <Text>
              Umbrella Academy must find a way to come together, find out what
              caused doomsday, put an end to it, and return to the current
              timeline to stop this other apocalypse.
            </Text>
          </Box>
          <Stack direction="row" spacing={4} fontFamily="Roboto Mono">
            <Link
              activeClass="active"
              to="character-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button variant="primary">Learn</Button>
            </Link>
            <NextLink href="https://www.imdb.com/title/tt1312171/?ref_=fn_al_tt_4">
              <Button variant="outline-primary">
                See more
              </Button>
            </NextLink>
          </Stack>
        </VStack>

        <VStack
          w="full"
          align="flex-start"
          mb={{ base: -75, md: "auto" }}
          mr={{ base: 0, md: 20 }}
        >
          <Transition type="toUp">
            <Box
              bg={theme.colors.secondary}
              borderStyle="solid"
              borderColor="#fff"
              borderWidth={1}
              align="center"
              h="100%"
              m={14}
              mt="35%"
              px={5}
            >
              <Image
                draggable={false}
                alt="Hero image"
                src={heroImg}
                mt="-35%"
                w="100%"
              />
            </Box>
          </Transition>

          <Image
            top={{ base: 210, md: "base" }}
            left={{ base: 5, md: "auto" }}
            w={{ base: 65, md: 100 }}
            position="absolute"
            draggable={false}
            opacity={0.75}
            src={dotsImg}
            alt=""
          />
        </VStack>
      </Flex>
    </>
  );
};
export default HeroSection;
