import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";

import { mapToComponent } from "pages/Teams/mapping";
import { ComponentSchema, ServerSchema, Team } from "pages/Teams/types";

import Header from "./components/Header";
import SideNav, { Wrapper as _SideNav } from "./components/SideNav";
import Teams from "./pages/Teams";

import mock from "mock-data.json";

const Wrapper = styled.main`
  --split-threshold: 65px;

  position: fixed;
  height: 100%;
  width: 100%;
  background: #f5f5f5;

  ${_SideNav} {
    width: var(--split-threshold);
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: var(--split-threshold);
  width: calc(100% - var(--split-threshold));
  height: 100vh;
  overflow-y: auto;
`;

function App() {
  const [apiData, setApiData] = useState<ComponentSchema>();

  const setAndSortApiData = (apiData: ComponentSchema) => {
    const clone = { ...apiData };

    if (clone.teams.length) {
      clone.teams.sort((a, b) => {
        if (a.category === "archived" && b.category === "archived") return 0;
        if (b.category === "archived") return -1;
        if (a.category === "archived") return 1;
        else return 0;
      });
    }

    setApiData(apiData);
  };

  useEffect(() => {
    /**
     * Insert fetch logic here
     */
    const mappedData = mapToComponent(mock as ServerSchema);
    setAndSortApiData(mappedData);
  }, []);

  return (
    <Wrapper>
      <SideNav />

      <Container>
        <Header apiData={apiData} />
        <Teams apiData={[apiData, setAndSortApiData]} />
      </Container>
    </Wrapper>
  );
}

export default App;
