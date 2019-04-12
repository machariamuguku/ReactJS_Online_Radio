import React, { Component } from 'react'
// import 'bulma/css/bulma.min.css'

export default class footerComponent extends Component {
    render() {
        return (
            <div>
                <a href="http://www.muguku.co.ke/" rel="noopener">
                    <h2> Macharia Muguku c {new Date().getFullYear()} All rights reserved </h2>
                </a>
            </div>
        )
    }
}