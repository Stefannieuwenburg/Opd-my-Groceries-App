import React from "react"
import List from "./List"

const ShoppingCart = (props) => {
  
    return (
      <div className="shoppingcart">
        <header>

          <h2>Winkelmand</h2>

          <button onClick={props.emptyCart}>
            Winkelmand leeg maken
          </button>

        </header>
        
        <List items={props.shoppingListItems} readonly={true} />
      </div>
    )

}

export default ShoppingCart