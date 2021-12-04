import React, { useState } from "react";
import Stack from './Stack'
import './App.css';


const Ingredients = props => {

    // state = {
    //     burgerTotal: [],
    // }
    const [burgerTotal, setBurgerTotal] = useState([])

    const addIngredient = (e) =>{
        e.preventDefault()
        let currentStack = {
            item: e.target.attributes.name.value,
            color: e.target.attributes.color.value,
        } 
        
        setBurgerTotal(prevsBurgerTotal => [...prevsBurgerTotal, currentStack])
        
    }

    const clearBurger = (e) => {
        e.preventDefault()
        setBurgerTotal(prevsBurgetTotal => [])
    }

    

    const allItems = props.items.map((el, i)=>{
        return (
                <div className = "Ingredient"
                    onClick={addIngredient}
                    name={el.name}
                    color={el.color} 
                    key={i}
                    style={{backgroundColor: el.color}}
                    >
                    {el.name}
                </div>
           
            
            )
        })
        return (
            <div className="container">
                <div className="left">{allItems}</div>
                 <Stack items={burgerTotal} onClick={clearBurger}/>
            </div>
        )

}



export default Ingredients
