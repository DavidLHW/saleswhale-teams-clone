import React from "react";
import styled from "styled-components/macro";

import locale from "locale";
import { category as data, Category } from "config/teams";

import City from "components/svg/City";
import Button from "./Button";
import SearchInput, { Wrapper as _SearchInput } from "./SearchInput";
import Printer from "components/svg/Printer";

const Wrapper = styled.div`
  padding: 0 var(--padding-h);
  background: white;

  box-shadow: 0 8px 8px -6px #0001;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const Item = styled.button(
  ({ $active }: { $active: boolean }) => `
  padding: 10px 15px;
  border: none;
  outline: none;
  background: transparent;

  font-size: 16px;
  cursor: pointer;

  border-bottom: 3px solid transparent;

  transition: 0.25s;

  ${
    $active
      ? `
    color: var(--theme-color);
    border-color: var(--theme-color);
  `
      : ""
  }
`
);

const List = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default ({
  category,
}: {
  category: [Category, (c: Category) => void];
}) => {
  return (
    <Wrapper>
      <Row style={{ padding: "20px 0" }}>
        <City color="#A4A6A8" />

        <h2 style={{ flexGrow: 1 }}>{locale.team.dashboard.title}</h2>

        <Button>{locale.team.dashboard.create}</Button>
      </Row>

      <Row style={{ marginTop: "12px" }}>
        <List>
          {data.map((v, i) => (
            <Item
              key={i}
              className="bold"
              onClick={() => category[1](v.type)}
              $active={v.type === category[0]}
            >
              {v.display}
            </Item>
          ))}
        </List>

        <SearchInput />
      </Row>
    </Wrapper>
  );
};
