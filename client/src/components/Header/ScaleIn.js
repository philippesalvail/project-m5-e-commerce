import React from "react";
import { useSpring, animated } from "react-spring";

const ScaleIn = ({ children }) => {
  const style = useSpring({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    right: 0,
    transform: "scale(1)",
    from: {
      transform: "scale(0.2)",
    },
    config: {
      tension: 250,
      friction: 12,
    },
  });
  return <animated.div style={style}>{children}</animated.div>;
};

export default ScaleIn;
