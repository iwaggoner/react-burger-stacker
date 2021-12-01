import React, { Component } from "react";
import Stack from './Stack'
import './App.css';


export default class Ingredients extends Component {

    state = {
        burgerTotal: [],
    }

    addIngredient = (e) =>{
        e.preventDefault()
        let currentStack = {
            item: e.target[1].value,
            color: e.target[0].value 
        }
        let burgerStack = this.state.burgerTotal
        burgerStack.push(currentStack)
        
        this.setState({
            burgerTotal: burgerStack,
        })
        console.log(burgerStack)

    }

    clearBurger = (e) => {
        e.preventDefault()
        this.setState({
            burgerTotal: []
        })

    }

    render () {

        const allItems = this.props.items.map((el, i)=>{
            return (
                <div className = "Ingredient" style={{backgroundColor: el.color}}>
                    <div>{el.name}</div>
                    <form onSubmit={this.addIngredient}>
                        <input hidden type="text" value={el.color}/>
                        <input hidden type="text" value={el.name}/>
                        <button type="submit">Added to Burger</button>
                    </form>
                </div>
            
            )
        })
        return (
            <div className="container">
                <div className="left">{allItems}</div>
                <Stack items={this.state.burgerTotal} onClick={this.clearBurger}/>
            </div>
        )
    }

}

