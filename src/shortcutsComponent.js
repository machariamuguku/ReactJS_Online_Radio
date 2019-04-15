import React, { Component } from 'react'

export default class Shortcuts extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showcallout: false
        }
    }

    render() {
        const { showcallout } = this.state
        return (
            <div className="callout">
                <div className="callout-header">Keyboard Controls</div>
                {showcallout ?
                    <div className="callout-container">
                        <p>'>' Volume Up</p>
                        <p>'>' Volume Down</p>
                        <p>'P' Play/Pause</p>
                        <p>'M' Mute</p>
                        <p>'B' simulate Buffer</p>
                    </div>
                    : ''}
            </div>
        )
    }
}