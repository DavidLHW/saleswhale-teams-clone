import React from "react";
import styled from "styled-components";

import locale from "locale";

import Magnifier, { Wrapper as _Magnifier } from "components/svg/Magnifier";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 8px 10px;
  background: #00000005;
  border-radius: 5px;

  ${_Magnifier} {
    height: 15px;
  }
`;

const Input = styled.input`
  outline: none;
  border: none;
  background: transparent;
`;

export default () => {
  return (
    <Wrapper>
      <Magnifier />

      <Input placeholder={locale.team.dashboard.searchPlaceholder} />
    </Wrapper>
  );
};
