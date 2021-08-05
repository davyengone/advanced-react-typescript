import PropTypes from "prop-types";
import styled from "styled-components";

const sizes = {
  small: {
    size: 30,
    border: 4,
  },

  medium: {
    size: 60,
    border: 8,
  },

  large: {
    size: 80,
    border: 12,
  },
};

export const Spinner = styled.div<{size: "small" | "medium" | "large"}>`
  display: inline-block;
  width: ${(props) => sizes[props.size].size}px;
  height: ${(props) => sizes[props.size].size}px;
  border-radius: 50%;
  border: ${(props) => sizes[props.size].border}px solid #dfe1e0;
  border-top-color: ${(props) => props.color};

  animation: spCircRot 1s infinite linear;

  @keyframes spCircRot {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

Spinner.defaultProps = {
  size: "small",
  color: "#00CCBE",
};
