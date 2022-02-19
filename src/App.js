import React, { Component  } from 'react'
import './App.css';

class Appclass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullname: "alassaad benhamad",
      bio: "a technician in optical fibers and I study web development ",
      adresse: "tunis code postal 4260",
     show:false, 
      count: 0
      
    }
  }
 

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    this.setState({
      count: this.state.count + 1 
    });
  }
  show= ()=>{
      this.setState({ show: !this.state.show})
  }
  render() {
    return (
      <div>
        <h3>checkpoint state</h3>
        <p class='p'>{this.state.count}</p>
        <br /><br />
        <button class='b' onClick={this.show} ><b>show Me</b></button> <br />
        { this.state.show ?
          <> 
          <br/>
          <div class="pro">
            <img src='avatar.png' style={{ width: "100px", height: "100px" }} />
            <p>{this.state.fullname} <br/> {this.state.bio} </p>
            <p>{this.state.adresse}</p>
            </div>
          </> : null}
      </div>
    )
  }
}

export default Appclass
