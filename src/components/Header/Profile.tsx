import React from "react";
import styled from "styled-components/macro";

import locale from "../../locale";

import Notification from "./Notification";
import CaretDown, { Wrapper as _CaretDown } from "../svg/CaretDown";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  padding: 0 25px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  ${_CaretDown} {
    height: 6px;
  }
`;

const Avatar = styled.img`
  aspect-ratio: 1/1;
  height: 40px;
  width: auto;

  border-radius: 50%;
  box-shadow: 0 0 2px 1px #0002;
`;

const Greeting = styled.p`
  font-size: 14px;
  color: #7f7f7f;
`;

export default ({
  name,
  imgSrc,
  notifications = 0,
}: {
  name?: string;
  imgSrc?: string;
  notifications?: number;
}) => {
  const greeting = locale.header.greeting.replace("{{ 1 }}", name || "");

  return (
    <Wrapper>
      <Notification number={notifications} />

      <Container>
        <Greeting>{greeting}</Greeting>

        <Avatar src={imgSrc} />

        <CaretDown />
      </Container>
    </Wrapper>
  );
};
