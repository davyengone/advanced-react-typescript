import styled from 'styled-components'

export const Background = styled.div`
  overflow: auto;
  background-color: ${props => props.mainBackgroundColor};
  min-height: 100vh;
`

Background.defaultProps = {
  mainBackgroundColor: '$FFF',
}
