import React, {Component, ComponentType} from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

function reducer(counter = 0, action: {type: string, payload: any}){
  if(action.type === "Inc"){
    return counter +1;
  }
  if(action.type === "Dec"){
    return counter - 1;
  }
  return counter;
}

// store 
const store = createStore(reducer)
// connect

export class _Counter extends Component<{counter: number, inc: () => void, dec: () => void}> {

  render(){
    console.log(this.props.counter)
  return (
    <>
      <button onClick={this.props.inc}>+</button>
      <button onClick={this.props.dec}>-</button>
      <span>{this.props.counter}</span>
    </>
  )
}
}

function mapStateToProps(counter: number){
  return {
    counter
  }
}
function mapActionToProps(dispatch: (args: any) => void){
  return {
    inc: () => dispatch({type: "Inc"}),
    dec: () => dispatch({type: "Dec"})
  }
}

function connect(
    mapStateToProps: (state: any) => {[key: string]: any}, 
    mapActionToProps: (dispatch: (args: {type: string, payload: any})=> void) => {[key: string]: any}){
    
    const props = {
        ...mapStateToProps(store.getState()),
        ...mapActionToProps(store.dispatch),
    }
    
    return function(WrappedComponent: ComponentType<{}>){
        return <WrappedComponent {...props}/>
    }
}

const HOC = connect(mapStateToProps, mapActionToProps);
const Counter = HOC(_Counter)

export function App() {
  return (<Provider store={store}>
    <Counter/>
  </Provider>)
} 