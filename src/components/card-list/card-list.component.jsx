import { Component } from "react";
import CardContainer from "../card-container/card-container.components";

import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log(monsters);
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardContainer monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
