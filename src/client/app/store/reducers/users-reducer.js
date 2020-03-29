import { GET_USERS } from "../types/user-types";

let initialState;

if (typeof window !== "undefined") {
  initialState = window.INITIAL_STATE.user;
} else {
  initialState = [];
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return initialState;
  }
};
