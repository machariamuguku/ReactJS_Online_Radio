import React, { Component } from 'react'

import expand from './resources/expand.svg'
import close from './resources/close.svg'

export default class Shortcuts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showcallout: true
        };
    };

    toogleExpand = () => {
        this.setState({ showcallout: !this.state.showcallout })

    }
    render() {
        const { showcallout } = this.state
        return (
            <div className="callout">
                <div className="callout-header" onClick={this.toogleExpand}> <span> Keyboard Controls </span> <img className="allign-toogle-image-vertically" src={showcallout ? close : expand} alt="expand" height="22px" width="22px" /> </div>
                {showcallout ?
                    <div className="speech-bubble callout-container">
                         <p><span>Right arrow key </span> - Volume Up</p>
                        <p><span>Left arrow key </span> - Volume Down</p>
                        <p><span>P </span> - Play/Pause</p>
                        <p><span>M </span> - Mute</p>
                        <p><span>B </span> - simulate Buffer</p>
                    </div>
                    : ''}
            </div>
        )
    }
}