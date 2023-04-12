const cardState = [];

const cardReducer = (state = cardState, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return [...state, action.card];
    case "EDIT_CARD":
      return state.map((b) => {
        if (b.id === action.id) {
          return {
            ...b,
            ...action.update,
          };
        } else {
          return b;
        }
      });
    case "REMOVE_CARD":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "SET_CARDS":
      return action.cards;
    default:
      return state;
  }
};

export default cardReducer;
