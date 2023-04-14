import React, { Component } from 'react'

export default class corperationbank extends Component {
    render() {
        return (
            <div>
                <h1>Corporationbank is located at{this.props.location}with the name {this.props.Data.uname}</h1>
            </div>
        )
    }
}