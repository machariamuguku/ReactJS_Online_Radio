import React, { Component } from 'react'
// import 'bulma/css/bulma.min.css'
import copyright from './resources/copyright.svg'

export default class footerComponent extends Component {
    render() {
        return (
            <div className="radio-link">
                <a href="http://www.muguku.co.ke/" rel="noopener noreferrer" target="_blank">
                    <h2> muguku.co.ke </h2>
                </a>
                <span>
                    <img className="radio-link-img-dimensions thisimg" src={copyright} alt="copyright" />
                    <h2 className="right-floater"> {new Date().getFullYear()}, {'\u00A0'} All rights reserved </h2>
                </span>
            </div>
        )
    }
}