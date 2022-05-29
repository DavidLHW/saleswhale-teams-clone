import React from "react";
import styled from "styled-components/macro";

import locale from "locale";
import type { Team } from "pages/Teams/types";

import Card, { Wrapper as _Card } from "./Card";

export const Wrapper = styled.div`
  flex-grow: 1;

  background: white;
  box-shadow: 0 0 15px 5px #0001;
`;

const TitleContainer = styled.div`
  padding: var(--padding);
  border-bottom: 1px solid var(--border-color);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageInfo = styled.p`
  font-size: 13px;
  color: var(--light-text);
`;

const Container = styled.div`
  padding: var(--padding);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
`;

export default ({ data }: { data?: Team[] }) => {
  //Get list length
  const dataLength = (data ? data.length : 0).toString();

  const template = locale.team.team.pageInfo
    .replace("{{ 1 }}", dataLength)
    .replace("{{ 2 }}", dataLength);

  /**
   * Render
   */
  return (
    <Wrapper>
      <TitleContainer>
        <h3>{locale.team.team.title}</h3>

        <PageInfo>{template}</PageInfo>
      </TitleContainer>

      <Container>
        {data?.map((_, i) => (
          <Card key={i} index={i} data={data[i]} />
        ))}
      </Container>
    </Wrapper>
  );
};
