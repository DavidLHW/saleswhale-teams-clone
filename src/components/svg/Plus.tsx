import React from "react";
import styled from "styled-components/macro";

export const Wrapper = styled.svg`
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
`;

export default () => {
  return (
    <Wrapper width={16} height={16} viewBox="0 0 16 16" fill="none">
      <path id="Shape" d="M10 0H6V6H0V10H6V16H10V10H16V6H10V0Z" fill="white" />
    </Wrapper>
  );
};
