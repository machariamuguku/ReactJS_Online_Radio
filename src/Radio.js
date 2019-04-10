import React, { Component } from 'react'
import FilePlayer from 'react-player/lib/players/FilePlayer'

import play from './resources/play.png'
import pause from './resources/pause.png'

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
        console.log('Radio Playing')
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
            <div>

                <label htmlFor='volume'>volume</label>
                <input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
                <label>{(volume * 10).toFixed(1)}</label>
                <label htmlFor='muted'>Muted</label>
                <input id='muted' type='checkbox' checked={muted} onChange={this.toggleMuted} />
                <h3> {playing ? 'HBR 103.5 is Playing!!!' : 'HBR 103.5 is Paused!!!'} </h3>
                <button onClick={this.playPause}> <img src={playing ? pause : play} alt="pause" /> </button>
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
            </div>
        )
    }
}

export default RadioPlayer