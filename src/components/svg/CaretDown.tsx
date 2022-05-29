import React from "react";
import styled from "styled-components/macro";

export const Wrapper = styled.svg`
  display: block;
  aspect-ratio: 2/1;
  height: auto;
  width: auto;
`;

export default () => {
  return (
    <Wrapper
      width="10"
      height="5"
      viewBox="0 0 10 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.757385 0H9.24267L5.00003 4.24264L0.757385 0Z"
        fill="black"
      />
    </Wrapper>
  );
};
