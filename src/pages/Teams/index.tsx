import React, { useState } from "react";
import styled from "styled-components/macro";

import type { Category } from "config/teams";
import type { ComponentSchema } from "./types";
import ApiDataContext from "./contexts/ApiDataContext";

import DashboardNav from "./components/DashboardNav";
import Activity from "./components/Activity";
import Team from "./components/Team";

const Wrapper = styled.section`
  --padding-h: 30px;
`;

const Container = styled.div`
  --padding: 20px;

  padding: 30px var(--padding-h);
  display: flex;
  align-items: start;
  gap: var(--padding);
`;

export default ({
  apiData,
}: {
  apiData: [ComponentSchema | undefined, (c: ComponentSchema) => void];
}) => {
  const [category, setCategory] = useState<Category>("all");

  const validTeam = apiData[0]?.teams.filter((v) => {
    //Filter out card categories that are not relevant
    if (category === "all") return true;
    return v.category === category;
  });

  return (
    <ApiDataContext.Provider value={apiData}>
      <Wrapper>
        <DashboardNav category={[category, setCategory]} />

        <Container>
          <Team data={validTeam} />
          <Activity data={apiData[0]?.activity} />
        </Container>
      </Wrapper>
    </ApiDataContext.Provider>
  );
};
