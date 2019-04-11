import React, { Component } from 'react'
import FilePlayer from 'react-player/lib/players/FilePlayer'

import './radio.css';
import play from './resources/play-button.svg'
import pause from './resources/pause-3.svg'
import logo from './resources/logo.svg'
import spectrum from './resources/spectrum.gif'
import spectrumNone from './resources/spectrum-none.png'
import volumebtn from './resources/volumebtn.svg'

class RadioPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            radioUrl: 'http://91.121.165.88:8116/stream',
            playing: false,
            volume: 0.2,
            muted: false
        };
    };

    playPause = () => {
        this.setState({ playing: !this.state.playing })
    }

    onPlay = () => {
        console.log('Radio is playing')
        this.setState({ playing: true })
    }
    setVolume = e => {
        this.setState({ volume: parseFloat(e.target.value) })
    }
    toggleMuted = () => {
        this.setState({ muted: !this.state.muted })
    }
    onPause = () => {
        console.log('onPause')
        this.setState({ playing: false })
    }

    render() {
        const { radioUrl, playing, volume, muted } = this.state

        return (
            <div className="radio">
                <img src={logo} alt="HBR 103.5 Knock Off Logo" height="140px" width="200px" />
                <label htmlFor='muted'>Muted</label>
                <input id='muted' type='checkbox' checked={muted} onChange={this.toggleMuted} />
                <h3> {playing ? 'HBR 103.5 is Playing!!!' : 'HBR 103.5 is Paused!!!'} </h3>
                <img src={playing ? pause : play} alt="pause" height="80px" width="80px" onClick={this.playPause} />
                <FilePlayer
                    config={{ file: { forceAudio: true } }}
                    url={radioUrl}
                    playing={playing}
                    volume={volume}
                    muted={muted}
                    width='0'
                    height='0'
                    onPlay={this.onPlay}
                    onPause={this.onPause}
                    onError={e => console.log('onError', e)}
                />
                <img src={playing ? spectrum : spectrumNone} alt="HBR 103.5 Knock Off Logo" height="80px" width="800px" /> 
                <label htmlFor='volume'>volume</label>
                <span> <img src={volumebtn} alt="volume button" height="30px" width="30px"/> <input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} /> </span>
                <label>{(volume * 10).toFixed(1)}</label>
            </div>
        )
    }
}

export default RadioPlayer