import { ContainerOutlineText } from "../../components/container-outline-text";
import { CharacterContext } from "../../context/characterContext";
import { Box, Heading, Image } from "@chakra-ui/react";
import { useContext } from "react";

interface CharacterThumbProps {
  charIndex: number;
}
const CharacterThumb = (props: CharacterThumbProps) => {
  const { changeIndex } = useContext(CharacterContext);
  return (
    <Box
      onClick={() => changeIndex(props.charIndex)}
      background="linear-gradient(180deg, rgba(247, 185, 24, 0.8) 0%, rgba(235, 187, 63, 0.616667) 22.92%, rgba(196, 196, 196, 0) 100%)"
      border=" 1px solid rgba(247, 185, 24, 0.9)"
      borderStyle="solid"
      borderWidth={1}
      cursor="pointer"
      mt={{base:"30%", md: "10%"}}
      w={{ base: 150, md: 230 }}
      d="-webkit-box"
      mx={2}
    >
      <Image
        src={`/images/${props.charIndex + 1}.png`}
        draggable={false}
        h={{ base: 180 }}
        mt={{base:"-30%", md: "-10%"}}
        alt=""
      />
      <ContainerOutlineText>
        <Heading
          fontSize={{ base: "4.5rem" }}
          ml={{base:-10, md: -30}}
          mt={{base:50}}
          justifySelf="flex-end"
          opacity={0.3}
        >
          {props.charIndex + 1}
        </Heading>
      </ContainerOutlineText>
    </Box>
  );
};
export default CharacterThumb;
