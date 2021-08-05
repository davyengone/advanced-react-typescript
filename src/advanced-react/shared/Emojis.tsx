import  { ReactChildren } from 'react'
import styled from "styled-components";

export const Container = styled.span`
  font-size: 2rem;
`;

export const Emojis = ({children}: {children: ReactChildren}) => (
  <Container role="img" aria-label="emoji">
    {children}
  </Container>
);