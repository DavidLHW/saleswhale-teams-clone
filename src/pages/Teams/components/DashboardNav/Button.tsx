import React from "react";
import styled from "styled-components/macro";

import Plus from "../../../../components/svg/Plus";

const Wrapper = styled.button`
  padding: 9px 10px;

  outline: none;
  border: none;
  background: #40d2bf;
  color: white;
  border-radius: 5px;

  display: flex;
  align-items: center;
  gap: 10px;

  cursor: pointer;
  transition: 0.25s opacity;

  &:hover {
    opacity: 0.8;
  }
`;

export default ({ children }: { children: string }) => {
  return (
    <Wrapper className="bold">
      <Plus />
      {children}
    </Wrapper>
  );
};
