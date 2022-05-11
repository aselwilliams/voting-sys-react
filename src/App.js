import { Component } from 'react';
import './App.css';
import data from './data'

class App extends Component{
  constructor() {
    super()
    this.state={
      teams: data
    }
    console.log(data)
  }
handleVote=()=>{
  
}
render() {
  const {teams} = this.state
return(
  <div class="container">
    {teams.map((team, index)=> {
    return (
      <div class="card" key={team.name}>
        <img src={team.img} alt={`${team.name} logo`} />
        <h3>{team.name}</h3>
        <button onClick={this.handleVote}>Vote</button>
        
    <div class="lower">
        <p>Vote count: <span id="span1">{team.vote}</span></p>
        <button type="reset" className='clear-btn'>Clear</button>
    </div>
    </div>
    )
    })}
    </div>
)
}
}
export default App;
