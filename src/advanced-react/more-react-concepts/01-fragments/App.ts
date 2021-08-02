import React, {Fragment} from 'react'
import styled from 'styled-components'

// TODO
// Extract the fruit boxes in a Fruits component and the vegetables boxes in a Vegetables component

const Row = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Box = styled.div`
  padding: 2rem;
  margin: 0.5rem 0;
  border-radius: 1rem;
  border: 1px solid hsla(190, 70%, 40%, 0.5);
  background-color: hsla(180, 70%, 40%, 0.3);
  min-width: 24%;
`

export const App = () => {
  return (
    <Row>
      <Box>Apple</Box>
      <Box>Banana</Box>
      <Box>Peach</Box>
      <Box>Pineapple</Box>
      <Box>Tomato</Box>
      <Box>Salad</Box>
      <Box>Pumpkin</Box>
    </Row>
  )
}
