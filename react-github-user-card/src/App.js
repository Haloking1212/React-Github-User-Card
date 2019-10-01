import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    me: null,
    followers: []
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/haloking1212`)
    .then(res => {
      console.log(res)
      this.setState({
        me : res.data.avatar_url
      })
    })
    .catch(err => console.log(err))
    axios.get(`https://api.github.com/users/haloking1212/followers`)
    .then(res => {
      console.log(res.data,"followers")
      this.setState({
        followers: res.data 
      })
    })
  }


  render() {
    return (
      <div className="App">
        {this.state.me ? <img src={this.state.me}/> : <p>loading...</p>}
        {this.state.followers.map(friends => {
          return (
            <div>
              
            </div>
          )
        })}
      </div>
    )
    }
}
export default App;
    
// componentDidUpdate(){
  //   axios.get(`https://api.github.com/users/haloking1212/followers`)
  //   .then(res => {
  //     console.log(res)
  //     this.setState({
  //       friends : res.data.followers_url
  //     })
  //   })
  //   .catch(err => console.log(err))
  // }
  // }
