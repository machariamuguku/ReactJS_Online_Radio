import React, { Component } from 'react'
import FilePlayer from 'react-player/lib/players/FilePlayer'

import FooterComponent from './footerComponent'
import Shortcuts from './shortcutsComponent'

import './radio.css';

import playbtn from './resources/play.svg'
import pausebtn from './resources/pause.svg'
import logopic from './resources/logo.svg'
import spectrumpic from './resources/spectrum.gif'
import spectrumNone from './resources/spectrum-none.png'
import mutedbtn from './resources/mute.svg'
import playingbtn from './resources/playing.svg'
import bufferingpic from './resources/buffering.svg'

class RadioPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            playing: false,
            volume: 0.2,
            muted: false,
            buffering: false,
        };
    };

    handleKeyPress = (e) => {
        if (e.keyCode === 77) {
            this.setState({ muted: !this.state.muted })
        } else if (e.keyCode === 80) {
            this.setState({ playing: !this.state.playing })
        } else if (e.keyCode === 39) {
            if (this.state.volume < 0.9) {
                this.setState({ volume: ((this.state.volume) + 0.1) });
                if ((this.state.volume).toFixed(3) > 0.001) {
                    this.setState({ muted: false })
                }
            }
        } else if (e.keyCode === 37) {
            if ((this.state.volume).toFixed(2) > 0.09) {
                this.setState({ volume: (this.state.volume - 0.1) });

                if ((this.state.volume).toFixed(2) < 0.10) {
                    this.setState({ muted: true })
                }
            }
        } else if (e.keyCode === 66) {
            this.setState({ buffering: !this.state.buffering });
        }
    }
    playPause = () => {
        this.setState({ playing: !this.state.playing })
    }

    setVolume = e => {
        this.setState({ volume: parseFloat(e.target.value) });
        if (parseFloat(e.target.value) === 0) {
            this.setState({ muted: true })
        } else if (parseFloat(e.target.value) > 0) {
            this.setState({ muted: false })
        };
    }
    toggleMuted = () => {
        this.setState({ muted: !this.state.muted })
    }
    setBuffer = () => {
        // this.setState({ buffering: true });
        console.log("bufferring!!!");
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {
        const radioUrl = 'http://91.121.165.88:8116/stream?1473424110680.mp3';
        const { playing, volume, muted, buffering } = this.state
        let radiostate;
        let showbufferingimg = false;


        // handle playing, muted and buffering states
        if (playing && !muted) {
            if (buffering) {
                radiostate = "is Playing but also Buffering";
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
            radiostate = "is Paused and Muted";
        }



        return (
            <div className="radio">

                <div className="hbr-title">
                    <h5> Homeboyz 103.5 Knock-Off Radio</h5>
                </div>

                {/* The logo */}
                <div>
                    <img src={logopic} alt="HBR 103.5 Knock-Off Logo" className="set-logo-image-dimensions" />
                    {/* Check state of 1.Playing, 2.Paused and 3.Buffering 4.Muted*/}
                    <h4 > HBR 103.5 {radiostate} {showbufferingimg ? <img className="right-floater" src={bufferingpic} alt="buffering" height="30px" width="30px" /> : ''}</h4>
                </div>

                {/* the keyboard shortcuts component */}
                <Shortcuts />

                {/* The Play/Pause ('button') image */}
                <img className="play-pause-img-dimensions add-some-margin cursor-to-hand" src={playing ? pausebtn : playbtn} alt="pause" onClick={this.playPause} />

                {/* The audio player */}
                <FilePlayer
                    config={{ file: { forceAudio: true } }}
                    url={radioUrl}
                    playing={playing}
                    volume={volume}
                    muted={muted}
                    width='0'
                    height='0'
                    onBuffer={this.setBuffer()}
                    onError={e => console.log('onError', e)}
                />

                {/* the volume and  Mute buttons */}
                <div>
                    <img className="mute-btn-dimensions cursor-to-hand" src={muted ? mutedbtn : playingbtn} alt="volume button" onClick={this.toggleMuted} />
                    <input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
                    <label className="right-floater add-left-margin">{(volume * 10).toFixed(1)}</label>
                </div>

                {/*The voice spectrum*/}
                {showbufferingimg ? <img className="spectrum-img-dimensions" src={spectrumNone} alt="Voice spectrum" /> : <img className="spectrum-img-dimensions" src={playing ? spectrumpic : spectrumNone} alt="Voice spectrum" />}

                {/* the footer component */}
                <FooterComponent />
            </div>
        )
    }
}

export default RadioPlayer