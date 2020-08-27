import React, { Component } from "react";
import SockJsClient from "react-stomp";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import "../style/Chat.css";

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
    //let input = document.getElementById("#outlined-basic");
    //input.value = "";
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

  render() {
    return (
      <div>
        <div className="align-center clearfix">
          <h1 className="chat-title">Chat about this movie!</h1>
        </div>

        <div className="align-center"></div>

        <div class="chat">
          <div class="chat-history">
            {this.state.messages.map((msg) => {
              return (
                <div className="chat-message-content clearfix">
                  <span className="chat-time">{msg.date}</span>
                  <h5 className="message-name">{msg.name}</h5>
                  <p className="message-message">{msg.message}</p>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
        <div className="align-center">
          <table className="send-message">
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
            if (String(msg.movieId) === String(this.props.movieId)) {
              var jobs = this.state.messages;
              jobs.push(msg);
              this.setState({ messages: jobs });
              console.log(this.state);
            }
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

{
  /*

	<div id="live-chat">
		
		<header class="clearfix">
			

			<h4>Chat about this movie!</h4>

		

		</header>

		<div class="chat">
			
			<div class="chat-history">
				
				<div class="chat-message clearfix">
					

					<div class="chat-message-content clearfix"></div>
						
						<span class="chat-time">13:37</span>

						<h5>Marco Biedermann</h5>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni vel debitis numquam qui tempora rem voluptatem delectus!</p>

					</div> <!-- end chat-message-content -->

				</div> <!-- end chat-message -->

				<hr>



			</div> <!-- end chat-history -->


			<form action="#" method="post">

				<fieldset>
					
					<input type="text" placeholder="Type your message…" autofocus>
					<input type="hidden">

				</fieldset>

			</form>

		</div> <!-- end chat -->

	</div> <!-- end live-chat -->
*/
}
