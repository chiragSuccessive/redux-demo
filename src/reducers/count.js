export const count = (state = 0, action) => {
  
  let newState;
  switch (action.type) {
    case "SET-COUNT":
      return (state + 1);
    default:
      return state;
  }
};
export default count;
