import styled from 'styled-components'

export const Text = styled.div`
  color: ${props => props.text};
`

Text.defaultProps = {
  backgroundColor: 'inherit',
}
