import React from 'react'
import PropTypes from "prop-types";
import {ReactNode} from "react";
import styled from "styled-components";

export const Container = styled.span`
  font-size: 2rem;
`;

export const Emojis = ({children}: {children: ReactNode}) => (
  <Container role="img" aria-label="emoji">
    {children}
  </Container>
);

Emojis.propTypes = {
  children: PropTypes.node.isRequired,
};
