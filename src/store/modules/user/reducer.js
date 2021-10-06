const initialState = { name: "" };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { name: action.name };

    default:
      return state;
  }
};

export default userReducer;
