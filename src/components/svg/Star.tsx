import React from "react";
import styled from "styled-components/macro";

export const Wrapper = styled.svg`
  aspect-ratio: 17/16;
  height: auto;
  width: auto;
  display: block;

  & > path {
    transition: 0.25s fill;
  }
`;

export default ({
  active = false,
  onClick,
}: {
  active?: boolean;
  onClick?: () => void;
}) => {
  const yellow = "#F8CE43";

  return (
    <Wrapper
      onClick={onClick}
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={active ? yellow : "#C7C7C7"}
        d="M11.8605 15.1543L8.00054 13.1252L4.14054 15.1543C3.41354 15.5413 2.54854 14.9193 2.68954 14.1003L3.42654 9.80125L0.302542 6.75725C-0.291458 6.17725 0.0395418 5.17025 0.857542 5.05125L5.17354 4.42425L7.10454 0.51225C7.44054 -0.17075 8.56154 -0.17075 8.89754 0.51225L10.8285 4.42325L15.1445 5.05025C15.9625 5.16925 16.2925 6.17625 15.6995 6.75625L12.5755 9.80125L13.3125 14.1003C13.4535 14.9233 12.5865 15.5363 11.8605 15.1543Z"
      />
      <path
        fill={active ? yellow : "white"}
        d="M8.417 10.896L10.949 12.227L10.466 9.407C10.41 9.083 10.518 8.752 10.753 8.522L12.802 6.524L9.971 6.113C9.644 6.066 9.363 5.861 9.218 5.566L7.951 3L6.684 5.566C6.538 5.861 6.257 6.066 5.931 6.113L3.1 6.524L5.149 8.522C5.384 8.751 5.492 9.083 5.436 9.407L4.953 12.227L7.485 10.896C7.777 10.742 8.125 10.742 8.417 10.896Z"
      />
    </Wrapper>
  );
};
