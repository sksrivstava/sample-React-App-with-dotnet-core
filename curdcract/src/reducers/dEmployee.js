import { ACTION_TYPE } from "../Action/dEmploee";

const initialstore = {
  list: [],
};

export const dEmployee = (state = initialstore, action) => {
  switch (action.type) {
    case ACTION_TYPE.create:
      return {
        ...state,
        list: [...state.list, action.actplay],
      };
    case ACTION_TYPE.fetch_all:
      return {
        ...state,
        list: [...action.actplay],
      };
    case ACTION_TYPE.update:
      return {
        ...state,
        list: state.list.map((x) =>
          x.EmpId == action.actplay.EmpId ? action.actplay : x
        ),
      };
    case ACTION_TYPE.DELETE:
      return {
        ...state,
        list: state.list.filter((x) => x.EmpId != action.actplay.EmpId),
      };
    default:
      return state;
  }
};
//export default dEmployee;
