import React, { Component } from 'react'
import axios from "axios"
import Recorder from 'react-mp3-recorder'
import ReactAudioPlayer from 'react-audio-player'
import {saveAs} from 'file-saver';
import VideoEmbed from './components/VideoEmbed';
import Header from "./components/Header";

import blobToBuffer from 'blob-to-buffer'
// import ribbon from './ribbon.png'

// For Abdul <3
// npm run build
// copy contents of build to docs
const COLLAB_ENdPOINT = "http://0fdd-104-199-122-141.ngrok.io/recommend";
let vids = [['ArsKCV3rkc4', 0], ['4HSkwF586ro', 1], ['QM4qxOYDwHo', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0]];
const API_KEY = "AIzaSyBqaWB1aHNyOlzNZ1o1VlQSzx1434urZfA";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      blob: '',
      vids: [['ArsKCV3rkc4', 0], ['4HSkwF586ro', 1], ['QM4qxOYDwHo', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0], ['ArsKCV3rkc4', 0]]
    };
  }

  render () {

    const {
      url,
      blob
    } = this.state

    return (
      <div>
        <Header />

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
              Click and hold to start recording for at least 5 seconds.
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
                {this.video_insert()}
              </div>
            )}
          </div>
          
        </div>
      </div>
    )
  }

  _onRecordingComplete = async (blob) => {
    blobToBuffer(blob, async (err, buffer) => {
      if (err) {
        console.error(err)
        return
      }
      var mp3file = new File([blob], "recording.mp3");
      var formData = new FormData();
      formData.append("rawAudioData", mp3file)

      if (this.state.url) {
        window.URL.revokeObjectURL(this.state.url)
      }

      await axios.post(COLLAB_ENdPOINT, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(function (response) {
        console.log(response);
        vids = response.data.videos;
      })
      .catch(function (error) {
        console.log(error);
      });


      this.setState({
        url: window.URL.createObjectURL(blob),
        blob: blob,
        vids: vids,
      });
    })
  }

  _onRecordingError = (err) => {
    console.log('error recording', err)

    if (this.state.url) {
      window.URL.revokeObjectURL(this.state.url)
    }

    this.setState({ url: null, blob: '' , vids: [['ArsKCV3rkc4', 0], ['4HSkwF586ro', 1], ['QM4qxOYDwHo', 0]]})
  };


  video_insert = () => {
    return (
      <>
      <br/>
        {this.state.vids.map(function(vid, index){
                    return <VideoEmbed videoID={vid[0]} startTime={vid[1]}/>;
                  })}
      </>
    );
  } 
}