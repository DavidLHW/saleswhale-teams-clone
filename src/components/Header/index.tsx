import React from "react";
import styled from "styled-components/macro";

import locale from "../../locale";
import type { ComponentSchema } from "pages/Teams/types";

import Profile from "./Profile";

const Wrapper = styled.header`
  display: flex;
  align-items: center;

  background: white;
  border-bottom: 1px solid var(--border-color);
`;

const Brand = styled.h1`
  font-size: 18px;
  color: #8c8b8b;
  padding: 22px 35px;

  border-right: 1px solid var(--border-color);
`;

const Title = styled.div`
  flex-grow: 1;
  padding: 0 20px;
  font-size: 18px;
`;

export default ({ apiData }: { apiData?: ComponentSchema }) => {
  return (
    <Wrapper>
      <Brand>{locale.header.brand}</Brand>

      <Title>{locale.header.title}</Title>

      <Profile
        name={apiData?.user?.name}
        imgSrc={apiData?.user?.imgSrc}
        notifications={apiData?.user?.notifications}
      />
    </Wrapper>
  );
};
