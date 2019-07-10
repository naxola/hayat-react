import { catalogConstants } from "../constants";
import { Item1 } from "../../assets/peptos-hero.png";

//let products_saved = JSON.parse(localStorage.getItem("products_saved"));

const initialState = {
  items: [
    {
      id: 1,
      title: "Peptos Booster Serum",
      desc: "with hyaluronic acid",
      price: 49.99,
      img: Item1
    },
    {
      id: 2,
      title: "Booster Serum",
      desc: "yaluronic acid",
      price: 4.99,
      img: Item1
    }
  ]
};

export function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case catalogConstants.ADD_PRODUCT:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });

    default:
      return state;
  }
}
