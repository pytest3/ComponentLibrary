/* eslint-disable react/prop-types */
import React from "react";
import { styled } from "styled-components";
import COLORS from "./colors";

import CheckCircle from "./icons/CheckCircle1x.png";
import Exclamation from "./icons/Exclamation1x.png";
import Xcircle from "./icons/Xcircle1x.png";
import Icon from "./icons/Icon1x.png";

const ICONS = {
  success: CheckCircle,
  warning: Exclamation,
  error: Xcircle,
  neutral: Icon,
};

export default function Banner({ status, title, children, ...rest }) {
  return (
    <Wrapper {...rest}>
      <img src={ICONS[status]} alt="check-circle" />
      <Header>{title}</Header>
      <Text>{children}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 900px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  background-color: ${({ status }) => COLORS[status]};
`;

const Header = styled.header`
  margin: 0;
  padding: 0;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
`;
