import CharacterSection from "../components/character-section";
import EndSection from "../components/end-section";
import HeroSection from "../components/hero-section";
import { CharacterProvider } from "../context/characterContext";
const Home = () => {
  return (
    <>
      <HeroSection />
      <CharacterProvider>
        <CharacterSection />
      </CharacterProvider>
      <EndSection />
    </>
  );
};
export default Home;
