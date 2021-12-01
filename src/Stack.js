import React, { Component } from "react";


export default class Stack extends Component {
    
    render () {
        const styleColor = 'background-color:'
        const burgerStack = this.props.items.map((e, i) => {
            let color = e.color
            return <div key={i}>{e}</div>
        })
    

        return (
            <div className="App">
                <div className="App">{burgerStack}</div>
                <h1>This is burger stack</h1>
                <br></br>
                <button onClick={this.props.onClick}>Clear Burger</button>

            </div>
        )
    }
}