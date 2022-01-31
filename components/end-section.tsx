import { Box, Flex, VStack, Text, Center } from "@chakra-ui/react";
const EndSection = () => {
  return (
    <Flex>
      <VStack w="full">
        <Box w="full">
          <Box
            backgroundImage={`url('/images/team.gif')`}
            backgroundPosition="center top"
            backgroundRepeat="no-repeat"
            backgroundAttachment="fixed"
            backgroundSize="cover"
            positon="absolute"
            zIndex={2}
            mx="auto"
            mt={100}
            w={{ base: "90%", md: "80%" }}
            h={300}
          />

          <Box
            background="linear-gradient(182deg, 
                rgba(0, 0, 0, 1) 10%,  rgba(0, 0, 0, 0.95) 30%, 
                rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 0.3) 100%)"
            h={{ base: 300 }}
            mt={{ base: -300 }}
            positon="absolute"
            zIndex={5}
            mx="auto"
            w="90%"
          >
            <Center>
              <Text w="70%" align="center" opacity={0.75}>
                &quot;We can accomplish anything when we accept responsibility
                together. This is what creates trust.&quot; <br /> <br />
                -Sir Reginald Hargreeves
              </Text>
            </Center>
          </Box>
        </Box>
      </VStack>
    </Flex>
  );
};
export default EndSection;
