import React from "react";
import styled from "styled-components/macro";

import locale from "locale";
import type { Activity } from "pages/Teams/types";

import Item from "./Item";

export const Wrapper = styled.div`
  background: white;
  box-shadow: 0 0 15px 5px #0001;

  width: 300px;
  flex-shrink: 0;
`;

const Title = styled.h3`
  padding: var(--padding);
  border-bottom: 1px solid var(--border-color);
`;

const List = styled.ul`
  padding: var(--padding);

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default ({ data }: { data?: Activity[] }) => {
  return (
    <Wrapper>
      <Title>{locale.team.activity.title}</Title>

      <List>
        {data?.map((item, i) => (
          <Item key={i} data={item} />
        ))}
      </List>
    </Wrapper>
  );
};
