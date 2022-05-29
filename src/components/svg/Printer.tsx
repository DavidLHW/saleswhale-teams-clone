import React from "react";
import styled from "styled-components/macro";

export const Wrapper = styled.svg`
  display: block;
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
`;

export default ({ color = "#444" }: { color?: string }) => {
  return (
    <Wrapper
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={color}
        d="M4 11V1H20V11"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <path
        stroke={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 15V23H1V15H8V18H16V15H23Z"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <path stroke={color} d="M9 6H15" strokeWidth={2} strokeLinecap="square" />
      <path
        stroke={color}
        d="M9 10H15"
        strokeWidth={2}
        strokeLinecap="square"
      />
    </Wrapper>
  );
};
