import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    me: null,
    login: null,
    img: null,
    followers: []
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/haloking1212`)
      .then(res => {
        console.log(res);
        this.setState({
          me: res.data.avatar_url,
          login: res.data.login,
          img: res.data.avatar_url
        });
      })
      .catch(err => console.log(err));
    axios
      .get(`https://api.github.com/users/haloking1212/followers`)
      .then(res => {
        console.log(res.data, "followers");
        this.setState({
          followers: res.data
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Friends and Followers</h1>
        <h3>{this.state.login}</h3>
        <img src={this.state.img} />
        {this.state.followers.map(friend => {
          return (
            <div key={friend.id}>
              <h3>{friend.login}</h3>
              <img src={friend.avatar_url} />
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
