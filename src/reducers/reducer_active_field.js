import { FIELD_SELECTED } from "../actions";

const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case FIELD_SELECTED:
      return action.payload;
    default:
      return state;
  }
}
