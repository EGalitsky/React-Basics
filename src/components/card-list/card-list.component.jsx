import { Component } from "react";
import CardContainer from "../card-container/card-container.components";

import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardContainer monster={monster} />;
    })}
  </div>
);

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <CardContainer monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
