import React from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react';
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
        <h1>My Friends on Github</h1>
        <h3>Haloking1212</h3>
        {this.state.me ? <img src={this.state.me}/> : <p>loading...</p>}
        {this.state.followers.map(friend => {
          return (
            <div key={friend.id}>
                <h3>{friend.login}</h3>
                <img src={friend.avatar_url}/>
              </div>
          )
        })}
      </div>
    )
    }
}
export default App;
