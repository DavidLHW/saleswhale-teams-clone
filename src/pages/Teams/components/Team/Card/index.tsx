import React, { useContext } from "react";
import styled from "styled-components/macro";

import type { ComponentSchema, Team } from "pages/Teams/types";
import useDropdown from "./useDropdown";
import ApiDataContext from "pages/Teams/contexts/ApiDataContext";

import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

export const Wrapper = styled.section(
  ({ $archived }: { $archived: boolean }) => `
  --padding: 15px;

  background: ${$archived ? "#EBEEF2" : "white"};
  border: 1px solid var(--border-color);
  border-radius: 4px;
  
  transition: 0.25s background;

  display: flex;
  flex-direction: column;
`
);

const Container = styled.div`
  flex-grow: 1;
  padding: var(--padding);

  display: flex;
  flex-direction: column;
  gap: var(--padding);
`;

export default ({ index, data }: { index: number; data: Team }) => {
  /**
   * Hooks
   */
  const apiData = useContext(ApiDataContext);
  const [ref, isExpand, expand, collapse] = useDropdown();

  /**
   * Not hook
   */
  const description = data.description.substring(0, 70);

  const handleClick = (e: React.MouseEvent) => {
    isExpand ? collapse() : expand(e);
  };

  const handleArchive = () => {
    if (apiData) {
      const clone = { ...apiData[0] };

      if (clone && clone.teams) {
        clone.teams[index].category = "archived";
        apiData[1](clone as ComponentSchema);
      }
    }
  };

  const handleFavourite = () => {
    if (!apiData) return;

    const clone = { ...apiData[0] };

    if (!clone || !clone.teams) return;

    if (data.category === "favourites") clone.teams[index].category = "normal";
    else clone.teams[index].category = "favourites";

    apiData[1](clone as ComponentSchema);
  };

  /**
   * Render
   */
  return (
    <Wrapper $archived={data.category === "archived"} onClick={handleClick}>
      <Container>
        <Header data={data} />

        <p>{description} ...</p>
      </Container>

      <Footer campaigns={data.campaignsCount} leads={data.leadsCount} />

      {data.category !== "archived" && (
        <Menu
          ref={ref}
          onArchive={handleArchive}
          onFavourite={handleFavourite}
          category={data.category}
        />
      )}
    </Wrapper>
  );
};
