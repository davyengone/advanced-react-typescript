import styled from 'styled-components'

export const Box = styled.div`
  margin: 2rem 1rem;
  padding: 3rem;
  overflow: auto;
  background-color: ${props => props.backgroundColor};
`

Box.defaultProps = {
  backgroundColor: '$FAFAFA',
}
