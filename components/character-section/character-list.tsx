import characterData from "../../contract/character-data";
import CharacterThumb from "./character-thumb";
import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { CharacterContext } from "../../context/characterContext";
import { ScrollBarMini } from "../scrollbar-mini";

const CharacterList = () => {
  const { index } = useContext(CharacterContext);
  let characterList = [];
  for (let indexChar = 0; indexChar < characterData.length; indexChar++)
    if (indexChar !== index)
      characterList.push(
        <CharacterThumb key={indexChar} charIndex={indexChar} />
      );

  return <ScrollBarMini>{characterList}</ScrollBarMini>;
};
export default CharacterList;
