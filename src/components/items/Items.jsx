import { Component } from "react";
import Item from "../item/Item";
import './items.css'

class Items extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {items, onAdd} = this.props;
    return (
      <main>
        {items.map(item => (
          <Item key={item.id} item={item} onAdd={onAdd} />
        ))}
      </main>
    )
  }
}

export default Items