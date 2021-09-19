// import React, { Component } from 'react';
// import YouTube from 'react-youtube';

// export default class App extends Component {
//   render() {
//     const opts = {
//       height: '390',
//       width: '640',
//       playerVars: {
//         // https://developers.google.com/youtube/player_parameters
//         autoplay: 1,
//       },
//     };

//     return <YouTube videoId="2g811Eo7K8U" opts={opts} />;
//   }

//   _onReady(event) {
//     // access to player in all event handlers via event.target
//     event.target.pauseVideo();
//   }
// }

import React, { Component } from 'react'
import axios from "axios"
import Recorder from 'react-mp3-recorder'
import ReactAudioPlayer from 'react-audio-player'
import {saveAs} from 'file-saver';

import blobToBuffer from 'blob-to-buffer'
// import ribbon from './ribbon.png'

export default class App extends Component {
  state = {
    url: '',
    blob: ''
  }

  render () {
    const {
      url,
      blob
    } = this.state

    return (
      <div>
        {/* <a href='https://github.com/transitive-bullshit/react-mp3-recorder'>
          <img
            src={ribbon}
            alt='Fork me on GitHub'
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              border: 0
            }}
          />
        </a> */}

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: '100vh'
          }}
        >
          <div>
            <Recorder
              onRecordingComplete={this._onRecordingComplete}
              onRecordingError={this._onRecordingError}
              style={{
                margin: '0 auto'
              }}
            />

            <p>
              Click and hold to start recording.
            </p>

            {url && (
              <div>
                <ReactAudioPlayer
                  src={url}
                  controls
                  style={{
                    minWidth: '500px'
                  }}
                />
              </div>
            )}
          </div>
          
        </div>
      </div>
    )
  }

  // get_video = () => {
  //   const YOUR_API_KEY = "AIzaSyBqaWB1aHNyOlzNZ1o1VlQSzx1434urZfA";
  //   const url = "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${YOUR_API_KEY}&part=snippet,contentDetails,statistics,status";
  //   let response = await fetch(url);
  //   const body = await response.json();
  // }

  _onRecordingComplete = async (blob) => {
    blobToBuffer(blob, async (err, buffer) => {
      if (err) {
        console.error(err)
        return
      }
      var mp3file = new File([blob], "lolrecording.mp3");
      var formData = new FormData();
      formData.append("rawAudioData", mp3file)

      if (this.state.url) {
        window.URL.revokeObjectURL(this.state.url)
      }

      axios.post('http://36f0-34-74-207-163.ngrok.io/recommend', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      this.setState({
        url: window.URL.createObjectURL(blob),
        blob: blob
      })
    })
  }

  _onRecordingError = (err) => {
    console.log('error recording', err)

    if (this.state.url) {
      window.URL.revokeObjectURL(this.state.url)
    }

    this.setState({ url: null, blob: '' })
  }

}