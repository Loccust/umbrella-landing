import { createContext, ReactNode, useState } from "react";

interface IThemeContext {
  index: number;
  changeIndex: (index: number) => void;
}
const defaultState = {
  index: 0,
  changeIndex: () => void 0,
};
const CharacterContext = createContext<IThemeContext>(defaultState);

interface Props {
  children: ReactNode;
}
const CharacterProvider = (props: Props) => {
  const [index, setIndex] = useState(0);
  const changeIndex = (newIndex: number) => setIndex(newIndex);
  return (
    <CharacterContext.Provider value={{ index, changeIndex }}>
      {props.children}
    </CharacterContext.Provider>
  );
};
export { CharacterContext, CharacterProvider };
