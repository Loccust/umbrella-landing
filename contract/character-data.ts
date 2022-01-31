import ICharacter from "./interface/ICharacter";

const characterData: ICharacter[] = [
  {
    name: "Luther",
    numberProps: {
      ml: { base: "-100px", md: "-110px" },
      mb: { base: "-100px", md: "0px" },
    },
    description:
      "The leader of The Umbrella Academy. He possesses superhuman strength and durability.",
  },
  {
    name: "Diego",
    numberProps: {
      ml: { base: "-60px", md: "-75px" },
      mb: { base: "-90px", md: "-80px" },
    },
    description:
      "With the power to manipulate thrown objects such as knives while in flight.",
  },
  {
    name: "Allison",
    numberProps: {
      ml: { base: "-60px", md: "5px" },
      mb: { base: "-90px", md: "-10px" },
    },
    description:
      "With the ability to influence events by prefacing any statement with 'I heard a rumor.'",
  },
  {
    name: "Klaus",
    numberProps: {
      ml: { base: "-60px", md: "15px" },
      mb: { base: "-90px", md: "-40px" },
    },
    description:
      "He and Ben struggle with their relationship but begin experimenting more with their combined abilities.",
  },
  {
    name: "Number Five",
    numberProps: {
      ml: { base: "-60px", md: "-75px" },
      mb: { base: "-90px", md: "-80px" },
    },
    description:
      "His ability is space-time manipulation. It allows him to travel through space and time and teleport objects without physical contact.",
  },
  {
    name: "Ben",
    numberProps: {
      ml: { base: "-60px", md: "-25px" },
      mb: { base: "-90px", md: "-10px" },
    },
    description:
      "He possesses the ability to summon eldritch creatures through a portal to another dimension located in his body.",
  },
  {
    name: "Vanya",
    numberProps: {
      ml: { base: "-60px", md: "-75px" },
      mb: { base: "-90px", md: "-80px" },
    },
    description:
      "She had a talent for violin, and when she was an adult wrote an autobiography about her life as the 'ordinary' member of The Umbrella Academy.",
  },
];
export default characterData;
