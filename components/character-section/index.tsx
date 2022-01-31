import { CharacterContext } from "../../context/characterContext";
import ICharacter from "../../contract/interface/ICharacter";
import characterData from "../../contract/character-data";
import { Box, Flex, VStack } from "@chakra-ui/react";
import CharacterInfo from "./character-info";
import CharacterList from "./character-list";
import { useContext } from "react";

const CharacterSection = () => {
  const { index } = useContext(CharacterContext);
  const selectedCharacter: ICharacter = characterData[index];
  return (
    <Flex id="character-section">
      <VStack w="full">
        <Box w="full">
          <Box
            backgroundImage={`url('/images/${index + 1}-action.gif')`}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
            positon="absolute"
            zIndex={2}
            mx="auto"
            w="85%"
            h={500}
          />

          <Box
            background={{
              base: "linear-gradient(0deg, rgba(0, 0, 0, 1 ) 60%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 0) 100%)",
              md: "linear-gradient(90deg, rgba(0, 0, 0, 1 ) 10%, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0) 100%)",
            }}
            h={{ base: "auto", md: 500 }}
            mt={{ base: -300, md: -500 }}
            positon="absolute"
            zIndex={5}
            mx="auto"
            w="90%"
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              align="flex-end"
              h="full"
              w="full"
            >
              <VStack>
                <Flex align="flex-end" mt={35}>
                  <CharacterInfo
                    selectedCharacter={selectedCharacter}
                    index={index}
                  />
                </Flex>
              </VStack>
              <VStack>
                <CharacterList />
              </VStack>
            </Flex>
          </Box>
        </Box>
      </VStack>
    </Flex>
  );
};
export default CharacterSection;
