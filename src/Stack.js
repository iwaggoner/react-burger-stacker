
const Stack = props => {
    
    const burgerStack = props.items.map((e, i) => {
        return <div className="burgerIngredient" style={{backgroundColor: e.color}} key={i}>{e.item}</div>
    })
    
    return (
        <div className="right">
            {burgerStack}
            <h1>This is burger stack</h1>
            <br></br>
            <button onClick={props.onClick}>Clear Burger</button>

        </div>
    )
}


export default Stack