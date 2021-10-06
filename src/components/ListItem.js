import React from 'react'

function ListItem(props) {
  return (
    <li
      key={props.item.id}
      value={props.item.title}
      onClick={() => (props.click ? props.click(props.item.title) : null)}
    >
      <span>{props.item.title}</span>
      <span>{props.readonly ? `Hoeveelheid: ${props.item.amount}` : ""}</span>
    </li>
  )
}

export default ListItem