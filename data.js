import React, { Component } from 'react'

export default class data extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"likhith"
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}