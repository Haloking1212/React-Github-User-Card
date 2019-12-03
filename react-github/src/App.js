import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    intialState: null,
    name: null,
    picture: null
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/haloking1212").then(res => {
      console.log(res.data, "haloking1212");
      this.setState({ picture: res.data.avatar_url,
      name: res.data.login });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to my github followers</h1>
        <p>{this.state.name}</p>
        <img src={this.state.picture} />
      </div>
    );
  }
}

export default App;
