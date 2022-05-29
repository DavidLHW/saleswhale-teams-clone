import React from "react";
import styled from "styled-components/macro";

import { activity } from "config/teams";
import type { Activity } from "pages/Teams/types";

const Wrapper = styled.li`
  list-style: none;
  display: flex;
  gap: 10px;
`;

const Image = styled.img`
  aspect-ratio: 1/1;
  height: 35px;
  width: auto;

  display: block;
  border-radius: 50%;
`;

const Container = styled.div``;

const Since = styled.p`
  margin-top: 4px;
  font-size: 13px;
  color: var(--light-text);
`;

export default ({ data }: { data: Activity }) => {
  const template = activity[data.action];

  const content = template
    .replace("{{ 1 }}", `<strong>${data.name}</strong>`)
    .replace("{{ 2 }}", `<strong>${data.target}</strong>`);

  return (
    <Wrapper>
      <Image src={data.imgSrc} />

      <Container>
        <p dangerouslySetInnerHTML={{ __html: content }} />

        <Since>{data.createdAt}</Since>
      </Container>
    </Wrapper>
  );
};
