import { ContainerOutlineText } from "../../components/container-outline-text";
import { Box, Text, Flex, VStack, Heading, Image } from "@chakra-ui/react";
import ICharacter from "../../contract/interface/ICharacter";
import Transition from "../transition";
import { AnimatePresence, motion } from "framer-motion";

interface CharacterInfoProps {
  selectedCharacter: ICharacter;
  index: number;
}
const CharacterInfo = (props: CharacterInfoProps) => (
  <>
    <Box w={{ base: "full", md: "50%" }} mt={20} d="inline-block">
      <AnimatePresence>
        <motion.img
          key={props.index}
          src={`/images/${props.index + 1}.png`}
          style={{ height: "360px", maxWidth: "450px" }}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          // exit={{ opacity: 0, scale: 0, x: -300 }}
        />
      </AnimatePresence>
    </Box>
    <VStack align="flex-start" w={{ base: "full", md: "60%" }} pb={5} ml={-5}>
      <ContainerOutlineText>
        <Heading
          variant="char-number"
          opacity={0.4}
          fontSize="7rem"
          as="h2"
          {...props.selectedCharacter.numberProps}
        >
          {props.index + 1}
        </Heading>
      </ContainerOutlineText>

      <Box pl={{ base: 2, md: 0 }}>
        <Heading variant="char-name" mb={{ base: -4, md: 0 }} as="h2" pb={3}>
          <b>{props.selectedCharacter.name}</b>
          <br />
          <span style={{ fontWeight: 400 }}>Hargreeves</span>
        </Heading>
        <Text bg={{ base: "whiteAlpha.200" }} w="full" p={2}>
          {props.selectedCharacter.description}
        </Text>
      </Box>
    </VStack>
  </>
);
export default CharacterInfo;
