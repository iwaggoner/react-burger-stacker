import React, { Component } from "react";


export default class Stack extends Component {
    
    render () {

        const burgerStack = this.props.items.map((e, i) => {
            return <div className="burgerIngredient" style={{backgroundColor: e.color}} key={i}>{e.item}</div>
        })
    

        return (
            <div className="right">
                <div className="burgerIngredient">{burgerStack}</div>
                <h1>This is burger stack</h1>
                <br></br>
                <button onClick={this.props.onClick}>Clear Burger</button>

            </div>
        )
    }
}