// import * as actions from "../actions";
// import { combineReducers } from "redux";

import { TOGGLE_DARKTHEME } from "../types";

// const preferences = (state = { darkThemeEnabled: false }, action) => {
//   switch (action.type) {
//     case actions.TOGGLE_DARKTHEME:
//       return { ...state, darkThemeEnabled: !state.darkThemeEnabled };

//     default:
//       return state;
//   }
// };

const initialState = {
  darkThemeEnabled: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARKTHEME:
      return {
        ...state,
        darkThemeEnabled: !state.darkThemeEnabled,
      };

    default:
      return state;
  }
};

export default rootReducer;
