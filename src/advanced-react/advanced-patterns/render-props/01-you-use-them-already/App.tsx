import React from 'react'
import {BrowserRouter as Routes, Link, Route, Switch, RouteComponentProps} from 'react-router-dom'
import {Container} from '../../../shared/Container'
import {Emojis} from '../../../shared/Emojis'
import {Title} from '../../../shared/Title'

const CharactersMap: any = {
  alice: '🙍‍♀️‍',
  bob: '🙎‍♂️',
}

// function Human({render}: {render: (props: any) => ComponentType<any>}){
//   return <div></div>
// }

type TParams = { character: string };

export function App() {
    return (
      <Routes>
        <Container>
          <Link to="/">Home</Link>
          <Link to="/intro">Intro</Link>
          <Link to="/bob">Bob's profile</Link>
          <Link to="/alice">Alice's profile</Link>
          <Switch>
            <Route exact path="/" render={() => <Emojis>🏡</Emojis>} />
            {/* <Route path="/" component={Emojis}></Route>
            <Route path="/">
              <Emojis>🏡</Emojis>
            </Route> */}

            <Route
              path="/intro"
              render={() => (
                <Title>
                  Welcome to this exercise about render props! This is an
                  example on how you (probably) already use them!
                </Title>
              )}
            />
            <Route
              path="/:character"
              render={(props: RouteComponentProps<TParams>) => {
               const  {character} = props.match.params;
               
                return (
                <Title>
                  {character}:{' '}
                  <span role="img" aria-label={character}>
                    {CharactersMap[character]}
                  </span>
                </Title>
              )}}
            />
          </Switch>
        </Container>
      </Routes>
    )
  }
