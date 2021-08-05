import styled from "styled-components";

type Props = {color: string; small: boolean};

export const Title = styled.h1<Props>`
  font-family: Helvetica;
  color: ${(props) => props.color || "black"}
  font-size: ${(props) => (props.small ? "1rem" : "2rem")};
`;
