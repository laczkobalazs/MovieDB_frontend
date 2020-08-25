import React, { Component } from "react";
import SockJsClient from "react-stomp";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      typedMessage: "",
      name: "",
    };
  }

  setName = (name) => {
    console.log(name);
    this.setState({ name: name });
  };

  sendMessage = () => {
    this.clientRef.sendMessage(
      "/app/user-all",
      JSON.stringify({
        name: this.state.name,
        message: this.state.typedMessage,
      })
    );
  };

  displayMessages = () => {
    return (
      <div>
        {this.state.messages.map((msg) => {
          return (
            <div>
              {this.state.name == msg.name ? (
                <div>
                  <p className="title1">{msg.name} : </p>
                  <br />
                  <p>{msg.message}</p>
                </div>
              ) : (
                <div>
                  <p className="title2">{msg.name} : </p>
                  <br />
                  <p>{msg.message}</p>
                </div>
              )}
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
        <div className="align-center">{this.displayMessages()}</div>
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

/*import React, { useState } from "react";
import SockJsClient from "react-stomp";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import NameComponent from "./NameComponent";

function Chat(props) {
  const [messages, setMessages] = useState([]);
  const [typedMessage, setTypedMessage] = useState("");
  const [name, setName] = useState("");

  const sendMessage = () => {
    this.clientRef.sendMessage(
      "/app/user-all",
      JSON.stringify({
        name: name,
        message: typedMessage,
      })
    );
  };

  const displayMessages = () => {
    return (
      <div>
        {messages.map((msg) => {
          return (
            <div>
              {name == msg.name ? (
                <div>
                  <p className="title1">{msg.name} : </p>
                  <br />
                  <p>{msg.message}</p>
                </div>
              ) : (
                <div>
                  <p className="title2">{msg.name} : </p>
                  <br />
                  <p>{msg.message}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <NameComponent setName={setName} />
      <div className="align-center">
        <h1>Welcome to Web Sockets</h1>
        <br />
        <br />
      </div>
      <div className="align-center">
        User : <p className="title1"> {name}</p>
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
                  setTypedMessage(event.target.value);
                }}
              />
            </td>
            <td>
              <Button variant="contained" color="primary" onClick={sendMessage}>
                Send
              </Button>
            </td>
          </tr>
        </table>
      </div>
      <br />
      <br />
      <div className="align-center">{displayMessages()}</div>
      <SockJsClient
        url="http://localhost:8088/websocket-chat/"
        topics={["/topic/user"]}
        onConnect={() => {
          console.log("connected");
        }}
        onDisconnect={() => {
          console.log("Disconnected");
        }}
        onMessage={(msg) => {
          var jobs = messages;
          jobs.push(msg);
          setMessages(jobs);
        }}
        ref={(client) => {
          this.clientRef = client;
        }}
      />
    </div>
  );
}

export default Chat;*/
