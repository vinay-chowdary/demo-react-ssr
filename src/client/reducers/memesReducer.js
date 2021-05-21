export default (state = [], action) => {
  switch (action.type) {
    case "GET_MEMES":
      if (action.payload) state = [...action.payload];
      return state;
    default:
      return state;
  }
};
