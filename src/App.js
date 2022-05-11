import { Component } from 'react';
import './App.css';
import data from './data.js'

class App extends Component{
  constructor() {
    super()
    this.state={
      teams: data
    }
  }

render() {
return(
  <div class="container">
    <div class="card">
        <img src="https://seeklogo.com/images/F/fc-barcelona-rugby-logo-8F77CA5AD8-seeklogo.com.png" alt="barcelona logo" />
        <h3>F.C. Barcelona</h3>
        <button id="button1">Vote</button>
        <button type="reset" id="clear1">Clear</button>
    <div class="lower">
        <p>Vote count: <span id="span1">0</span></p>
    </div>
    </div>
    </div>
)
}
}
export default App;
