import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { GrUpdate } from "react-icons/gr";

const LoadingSpinner = ({ size = "50px" }) => {
  const spinAnimation = useSpring({
    transform: `rotate(360)`,
    from: {
      transform: `rotate(0deg)`,
    },
    config: {
      tension: 1.5,
      friction: 0,
    },
  });
  return (
    <Wrapper>
      <AnimBox style={spinAnimation}>
        <GrUpdate size={size} color="#666" />
      </AnimBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding-top: 150px;
`;

const AnimBox = styled(animated.div)`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
`;

export default LoadingSpinner;
