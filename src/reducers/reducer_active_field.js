import { AT_FIELD } from "../actions/index";

const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case AT_FIELD.READ:
      return action.payload;
    default:
      return state;
  }
}
