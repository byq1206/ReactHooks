const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        people: [...state.people, action.payload],
        isModel: true,
        modelContent: "item added"
      };
    case "NO_VALUE":
      return {
        ...state,
        isModel: true,
        modelContent: "please enter values "
      }
    case "DELETE_ITEM":
      return {
        ...state,
        people: state.people.filter((item) => item.id !== action.payload.id),
        isModel: true,
        modelContent: "Item Deleted"
      }
    case "CLOSE_MODAL":
      return {
        ...state,
        isModel: false
      }
    default:
      break;
  }
}
export default reducer