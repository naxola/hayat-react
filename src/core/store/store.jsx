//https://www.valentinog.com/blog/redux/
//https://www.freecodecamp.org/news/the-best-way-to-architect-your-redux-app-ad9bd16c8e2d/
//https://www.simform.com/build-ecommerce-app-reactjs/

import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;
