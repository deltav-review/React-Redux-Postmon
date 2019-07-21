const initialState =[];
export default (state = initialState, action)=> {
  let {type, payload={} } = action;

  switch (type) {
    case "GET":
    return [...state];
    default:
    return state;
  }
}