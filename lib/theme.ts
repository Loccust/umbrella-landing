import { extendTheme } from "@chakra-ui/react";
const styles = {
  global: () => ({
    body: {
      bg: "#000",
    },
  }),
};

const colors = {
  primary: "#F7B918",
  secondary: "#4B4BBA",
};

const components = {
  Button: {
    baseStyle: {
      borderRadius: "none",
      color: "#000",
      w: 110,
    },
    variants: {
      primary: {
        bg: colors.primary,
      },
      "outline-primary": {
        bg: "transparent",
        color: "#fff",
        borderColor: "#fff",
        borderWidth: "1px",
      },
    },
  },
  Heading: {
    variants: {
      "char-number": {
        fontFamily: "Open Sans",
        fontWeight: 800,
      },
      "char-name": {
        fontFamily: "Lexend Deca",
        fontSize: { base: "1.5rem", md: "1.75rem" },
        color: colors.primary,
      },
    },
  },
  Text: {
    baseStyle: {
      fontFamily: "Roboto Mono",
      fontSize: { base: "11pt", md: "12pt" },
      color: "#fff",
    },
  },
};

const theme = extendTheme({
  components,
  styles,
  colors,
});
export default theme;
