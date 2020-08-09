import React,{Component} from 'react';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Description from "./Description"
import Home from "./Home"

class App extends Component {
    render(){
    return(
      <HashRouter basename='/'>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/:id" exact component={Description}/>
        </Switch>
      </HashRouter>      
    )   
  }  
}

export default App;
