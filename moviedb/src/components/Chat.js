import React, { Component } from "react";
import SockJsClient from "react-stomp";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      typedMessage: "",
      name: localStorage.getItem("username"),
    };
  }

  componentDidMount() {
    Axios.get(`http://localhost:8080/get-chat/${this.props.movieId}`, {
      withCredentials: true,
      headers: { Authorization: document.cookie.split("=")[1] },
    }).then((res) => {
      this.setState({ messages: res.data });
    });
  }

  setName = (name) => {
    console.log(name);
    this.setState({ name: name });
  };

  sendMessage = () => {
    this.clientRef.sendMessage(
      "/app/user-all",
      JSON.stringify({
        headers: { Authorization: document.cookie.split("=")[1] },
        name: this.state.name,
        message: this.state.typedMessage,
        movieId: this.props.movieId,
      })
    );
  };

  displayMessages = () => {
    return (
      <div>
        {this.state.messages.map((msg) => {
          return (
            <div>
              <div>
                <p>{msg.name} : </p>
                <br />
                <p>{msg.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="align-center">
          <h1>Welcome to Web Sockets</h1>
          <br />
          <br />
        </div>
        <div className="align-center">
          User : <p className="title1"> {this.state.name}</p>
        </div>
        <div className="align-center">
          <br />
          <br />
          <table>
            <tr>
              <td>
                <TextField
                  id="outlined-basic"
                  label="Enter Message to Send"
                  variant="outlined"
                  onChange={(event) => {
                    this.setState({ typedMessage: event.target.value });
                  }}
                />
              </td>
              <td>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.sendMessage}
                >
                  Send
                </Button>
              </td>
            </tr>
          </table>
        </div>
        <br />
        <br />
        <div className="align-center">
          <div>
            {this.state.messages.map((msg) => {
              return (
                <div>
                  <div>
                    <p>{msg.name} : </p>
                    <br />
                    <p>{msg.message}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <SockJsClient
          url="http://localhost:8080/websocket-chat/"
          topics={["/topic/user"]}
          onConnect={() => {
            console.log("connected");
          }}
          onDisconnect={() => {
            console.log("Disconnected");
          }}
          onMessage={(msg) => {
            var jobs = this.state.messages;
            jobs.push(msg);
            this.setState({ messages: jobs });
            console.log(this.state);
          }}
          ref={(client) => {
            this.clientRef = client;
          }}
        />
      </div>
    );
  }
}

export default Chat;
