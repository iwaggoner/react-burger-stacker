import React, { Component } from "react";
import Stack from './Stack'
import './App.css';


export default class Ingredients extends Component {

    state = {
        burgerStack: []
    }

    addIngredient = (e) =>{
        e.preventDefault()
        let currentStack = this.state.burgerStack
        currentStack.push(e.target.value)
        this.setState({
            burgerStack: currentStack
        })
    }

    clearBurger = (e) => {
        e.preventDefault()
        this.setState({
            burgerStack: []
        })

    }

    render () {

        const allItems = this.props.items.map((el, i)=>{
            return (
                <div>
                    <li>{el.name}</li>
                    <button onClick={this.addIngredient} key={i} value={el.name}>Added to Burger</button>
                </div>
            
            )
        })
        return (
            <div className="container">
                <ul className="left">{allItems}</ul>
                <Stack className="right" items={this.state.burgerStack} onClick={this.clearBurger}/>
            </div>
        )
    }

}

