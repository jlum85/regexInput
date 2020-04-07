import { combineReducers } from "redux";
import FieldsReducer from "./reducer_fields";
import ActiveFieldReducer from "./reducer_active_field";

const rootReducer = combineReducers({
  fields: FieldsReducer,
  activeField: ActiveFieldReducer,
});

export default rootReducer;
