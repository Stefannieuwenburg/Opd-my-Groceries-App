import React, {Component} from "react"
import ListItem from './ListItem'

class List extends Component {

  render() {
    const listItem = this.props.items.map((item) => (
      <ListItem
        key={item.id}
        item={item}
        click={this.props.click}
        readonly={this.props.readonly}
      />
    ))
    return (
      <ul className="list">
        {listItem}
      </ul>
    )}
    
}

export default List