import React, { useContext } from "react";
import styled from "styled-components/macro";

import locale from "locale";
import type { Team } from "pages/Teams/types";
import ApiDataContext from "pages/Teams/contexts/ApiDataContext";

import Star, { Wrapper as _Star } from "components/svg/Star";

const Wrapper = styled.header`
  display: flex;
  align-items: start;
  gap: 10px;

  ${_Star} {
    flex-shrink: 0;
  }
`;

const Image = styled.img`
  aspect-ratio: 1/1;
  height: 40px;
  width: auto;
  display: block;

  border-radius: 3px;
`;

const Container = styled.div`
  flex-grow: 1;
`;

const Target = styled.h4`
  font-size: 15px;
`;

const Created = styled.p`
  font-size: 13px;
  color: var(--light-text);
`;

const StarContainer = styled.div(
  ({ $hide }: { $hide: boolean }) => `
  position: relative;
  opacity: ${$hide ? 0 : 1};
  visibility: ${$hide ? "hidden" : "visible"};
`
);

export default ({ data }: { data: Team }) => {
  let since = "";

  if (data.createdAt) {
    if (data.category === "archived") since = locale.team.team.archivedOn;
    else since = locale.team.team.createdOn;

    since = since.replace("{{ 1 }}", data.createdAt);
  }

  return (
    <Wrapper>
      <Image src={data.imageSrc} />

      <Container>
        <Target>{data.name}</Target>

        <Created>{since}</Created>
      </Container>

      <StarContainer $hide={data.category === "archived"}>
        <Star active={data.category === "favourites"} />
      </StarContainer>
    </Wrapper>
  );
};
