import React from "react";
import styled from "styled-components/macro";

import locale from "locale";
import { Category } from "config/teams";

const Wrapper = styled.div`
  position: fixed;
  padding: 5px 0;
  background: white;
  box-shadow: 0 0 3px 3px #0001;

  transform-origin: center top;

  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 5px 10px;
  white-space: nowrap;

  outline: none;
  border: none;
  background: white;

  cursor: pointer;
  transition: 0.15s background;
  text-align: start;

  &:hover {
    background: #f7f7f7;
  }
`;

export default React.forwardRef(
  (
    {
      onArchive,
      onFavourite,
      category,
    }: {
      onArchive: () => void;
      onFavourite: () => void;
      category: Category;
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Wrapper tabIndex={0} ref={ref}>
        <Button onClick={onArchive}>{locale.team.team.menu.archive}</Button>

        {category !== "archived" && (
          <Button onClick={onFavourite}>
            {category === "favourites"
              ? locale.team.team.menu.removeFavourite
              : locale.team.team.menu.favourite}
          </Button>
        )}
      </Wrapper>
    );
  }
);
