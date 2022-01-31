import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const Transition = ({ children, type = "toUp", delay = 0 }) => {
  const motions = {
    toUp: {
      initial: { y: 10, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    },
    toRight: {
      initial: { x: -15, opacity: 0 },
      animate: { x: 10, opacity: 1 },
    },
  };
  return (
    <StyledDiv
    {...motions[type]}
    transition={{ duration: 0.8, delay }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: false }}
    mb={6}
    >
      {children}
    </StyledDiv>
  );
};
export default Transition;
