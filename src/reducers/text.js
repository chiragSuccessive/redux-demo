export const text = (state = '', action) => {
  let newState = '';
  switch (action.type) {
    case "SET-TEXT":
      newState = Object.assign({}, { value: action.value });      
      return newState;
    default:
      return state;
  }
};
export default text;
