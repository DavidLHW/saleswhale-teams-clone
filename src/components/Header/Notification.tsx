import React from "react";
import styled from "styled-components/macro";

import Printer, { Wrapper as _Printer } from "../svg/Printer";

const Wrapper = styled.div`
  position: relative;

  ${_Printer} {
    height: 20px;
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);

  aspect-ratio: 1/1;
  height: 20px;
  width: auto;
  border: 3px solid white;

  border-radius: 50%;
  font-size: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  background: var(--theme-color);
`;

export default ({ number }: { number: number }) => {
  return (
    <Wrapper>
      <Printer color="#A1A1A1" />

      {number !== 0 && <Badge>{number}</Badge>}
    </Wrapper>
  );
};
