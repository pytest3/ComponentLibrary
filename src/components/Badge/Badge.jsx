/* eslint-disable react/prop-types */
import { styled } from "styled-components";

import COLORS from "./colors";

export default function Badge({ ...rest }) {
  return <Wrapper {...rest}></Wrapper>;
}

// color must be converted back to a string using string template literals
const Wrapper = styled.div`
  border-radius: ${({ type }) => (type === "pill" ? "14px" : "4px")};
  padding: 2px, 12px, 2px, 12px;
  height: 24px;
  color: ${({ color }) => COLORS[`${color}`]?.["text"] || COLORS.gray["text"]};
  background-color: ${({ color }) =>
    COLORS[`${color}`]?.["background"] || COLORS.gray["background"]};
  width: 67px;
`;
