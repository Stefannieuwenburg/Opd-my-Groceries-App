import React from "react"
import InputField from "./InputField"
import List from "./List"

const GroceryList = (props) => {

    return (
      <div className="grocerylist">
        <header>
          <h2>Boodschappenlijst</h2>
          <InputField onSubmit={props.addGrocery} />
        </header>
        <List
          items={props.groceryItems}
          click={props.clickItem}
        />
      </div>
    )
}

export default GroceryList