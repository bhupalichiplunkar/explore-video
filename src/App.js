import React, { Component } from "react";
import "./App.css";
import subtitles from "./subtitles";
import covertStringToObject from "./converter";

class App extends Component {
  constructor(props) {
    super(props);
    this.node = null;
    this.subtitleArr = covertStringToObject(subtitles);
    this.state = {
      currentSubtitle: null
    };
  }

  displaySubtitles = event => {
    const updatedTime = Math.floor(event.target.currentTime);
    const currentSubtitle = this.subtitleArr.find(
      sb => sb.start <= updatedTime && sb.end > updatedTime
    );
    this.setState({ currentSubtitle });
  };

  render() {
    return (
      <div className="app">
        <div className="video-container">
          <video controls width="500px" onTimeUpdate={this.displaySubtitles}>
            <source
              src="http://dl3.webmfiles.org/big-buck-bunny_trailer.webm"
              type="video/webm"
            />
          </video>
          <div className="video-subtitle">
            {this.state.currentSubtitle
              ? this.state.currentSubtitle.text
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
