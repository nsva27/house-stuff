import { Component } from "react";
import Item from "../item/Item";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <main>
        {this.props.items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </main>
    )
  }
}

export default Items