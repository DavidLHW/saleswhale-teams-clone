import React from "react";
import styled from "styled-components/macro";

import Chatbox from "components/svg/Chatbox";
import MovingAvatar from "components/svg/MovingAvatar";
import locale from "locale";

const Wrapper = styled.footer`
  padding: 20px var(--padding);
  border-top: 1px solid var(--border-color);

  display: flex;
  align-items: center;
  gap: 10px;

  & svg {
    height: 14px;
  }
`;

const Count = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  & > p {
    display: inline-block;
    color: var(--light-text);
    font-size: 13px;
  }
`;

export default ({ campaigns, leads }: { campaigns: number; leads: number }) => {
  return (
    <Wrapper>
      <Count>
        <Chatbox color="var(--light-text)" />
        <p>
          {campaigns} {locale.team.team.count.campaigns}
        </p>
      </Count>

      <Count>
        <MovingAvatar color="var(--light-text)" />
        <p>
          {leads} {locale.team.team.count.leads}
        </p>
      </Count>
    </Wrapper>
  );
};
