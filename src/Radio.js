import React, { Component } from 'react'
import FilePlayer from 'react-player/lib/players/FilePlayer'

import './radio.css';

import playbtn from './resources/play-button2.svg'
import pausebtn from './resources/pause-3.svg'
import logo from './resources/logo.svg'
import spectrum from './resources/spectrum.gif'
import spectrumNone from './resources/spectrum-none.png'
import volumebtn from './resources/volumebtn.svg'
import mutedbtn from './resources/mutebtn.svg'
import playingbtn from './resources/playing.svg'
import bufferingimg from './resources/buffering2.svg'

class RadioPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            radioUrl: 'http://91.121.165.88:8116/stream',
            playing: false,
            volume: 0.2,
            muted: false,
            buffering: false
        };
    };

    playPause = () => {
        this.setState({ playing: !this.state.playing })
    }

    setVolume = e => {
        this.setState({ volume: parseFloat(e.target.value) });
        if (parseFloat(e.target.value) === 0) {
            this.setState({ muted: true })
        } else {
            this.setState({ muted: false })
        };
    }
    toggleMuted = () => {
        this.setState({ muted: !this.state.muted })
    }
    setBuffer = () => {
        this.setState({ buffering: !this.state.buffering })
    }
    render() {
        const { radioUrl, playing, volume, muted, buffering } = this.state
        let radiostate;
        let showbufferingimg = false;

        if (playing && !muted) {
            if (buffering) {
                radiostate = "should be Playing but it's Buffering";
                showbufferingimg = true;
            } else {
                radiostate = "is Playing"
            }
        } else if (playing && muted) {
            if (buffering) {
                radiostate = "should be Playing but it's Muted and Buffering";
                showbufferingimg = true;
            } else {
                radiostate = "should be Playing but it's Muted"
            }
        } else if (!playing && !muted) {
            radiostate = "is Paused"
        } else if (!playing && muted) {
            radiostate = "is Paused and Muted"
        }

        return (
            <div className="radio">
                {/* The logo */}
                <img src={logo} alt="HBR 103.5 Knock Off Logo" height="140px" width="200px" />

                <div>
                    {/* Check state of 1.Playing, 2.Paused and 3.Buffering 4.Muted*/}
                    {/* {buffering ? <h3> HBR 103.5 is buffering!!!</h3> : <h3> HBR 103.5 is {playing ? ' Playing!!!' : 'Paused!!!'} </h3>} */}
                    <h3 className="left-floater"> HBR 103.5 {radiostate}</h3>

                    {showbufferingimg ? <img className="right-floater allign-the-image-vertically" src={bufferingimg} alt="buffering" height="30px" width="30px" /> : ''}
                </div>

                <div>
                    {/* Mute button */}
                    <img className="left-floater add-some-margin" src={muted ? mutedbtn : playingbtn} alt="mute" height="40px" width="40px" onClick={this.toggleMuted} />
                    {/* The Play/Pause ('button') image */}
                    <img className="right-floater" src={playing ? pausebtn : playbtn} alt="pause" height="40px" width="40px" onClick={this.playPause} />
                </div>

                {/* The audio player */}
                <FilePlayer
                    config={{ file: { forceAudio: true } }}
                    url={radioUrl}
                    playing={playing}
                    volume={volume}
                    muted={muted}
                    width='0'
                    height='0'
                    onBuffer={this.setBuffer}
                    onError={e => console.log('onError', e)}
                />

                {/*The voice spectrum*/}
                <img src={playing ? spectrum : spectrumNone} alt="Voice spectrum" height="80px" width="800px" />

                {/* the volume button */}
                <div className="add-top-margin">
                    <img className="left-floater" src={volumebtn} alt="volume button" height="25px" width="30px" />
                    <input className="right-floater" type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
                </div>
                <label>{(volume * 10).toFixed(1)}</label>
            </div>
        )
    }
}

export default RadioPlayer