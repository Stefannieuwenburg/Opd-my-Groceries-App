import React, { Component } from "react"
import GroceryList from "./GroceryList"
import ShoppingCart from "./ShoppingCart"


class Container extends Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        { id: 1, title: "Melk" },
        { id: 2, title: "Brood" },
        { id: 3, title: "Rijst" },
      ],
      shoppingListItems: [],
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.handleClickAddGrocery = this.handleClickAddGrocery.bind(this);
    this.addAmountToItem = this.addAmountToItem.bind(this);
  }

 
  addAmountToItem(title) {
    const currentShoppingList = [...this.state.shoppingListItems];
    const newShoppingList = currentShoppingList.map((item) => {
      if (item.title === title) {
        item.amount++;
      }
      return item;
    });
    this.setState({ shoppingListItems: newShoppingList });
  }

 
  handleClickGroceryItem(title) {
    const shoppingListItems = [...this.state.shoppingListItems];
    const shoppingListItem = shoppingListItems.filter(
      (item) => item.title === title
    );

    if (shoppingListItem.length === 0) {
      this.setState((prevState) => {
        const newShoppingList = prevState.shoppingListItems;
        newShoppingList.push({
          id: newShoppingList.length + 1,
          title: title,
          amount: 1,
        });
        return {
          shoppingListItems: newShoppingList,
        };
      });
    } else {
      this.addAmountToItem(title);
    }
  }

  
  emptyCart() {
    this.setState({ shoppingListItems: [] });
  }

  
  handleClickAddGrocery(event, title) {
    event.preventDefault();
    if (title !== undefined && title !== null && title.length > 0) {
      this.setState((prevState) => {
        const groceryItems = [...prevState.groceryItems];
        groceryItems.push({
          id: groceryItems.length + 1,
          title: title,
        });
        return {
          groceryItems: groceryItems,
        };
      });
    }
  }

  render() {
    return (
      <div className="container">
        
        <main>
          <GroceryList
            groceryItems={this.state.groceryItems}
            clickItem={this.handleClickGroceryItem}
            addGrocery={this.handleClickAddGrocery}
          />
          <ShoppingCart
            shoppingListItems={this.state.shoppingListItems}
            emptyCart={this.emptyCart}
          />
        </main>
      </div>
    );
  }
}

export default Container