import React from "react";
import styled from "styled-components/macro";

import Narwhal, { Wrapper as _Narwhal } from "./svg/Narwhal";
import Cardiogram from "./svg/Cardiogram";
import Chatbox from "./svg/Chatbox";
import City from "./svg/City";
import MovingAvatar from "./svg/MovingAvatar";
import Question, { Wrapper as _Question } from "./svg/Question";

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  padding: 20px 0;
  background: #042235;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  ${_Narwhal} {
    height: 28px;
  }
  ${_Question} {
    height: 20px;
  }
`;

const List = styled.ul`
  flex-grow: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const Item = styled.li(
  ({ $active = false }: { $active?: boolean }) => `
  list-style: none;
  height: 60px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  ${
    $active
      ? `
    background: var(--theme-color);
  `
      : ""
  }

  & > svg { height: 24px }
`
);

export default () => {
  return (
    <Wrapper>
      <Narwhal />

      <List>
        <Item>
          <Chatbox />
        </Item>

        <Item $active>
          <City color="white" />
        </Item>

        <Item>
          <MovingAvatar />
        </Item>

        <Item>
          <Cardiogram />
        </Item>
      </List>

      <Question />
    </Wrapper>
  );
};
