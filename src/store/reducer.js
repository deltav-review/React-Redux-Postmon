const initialState =[];
export default (state = initialState, action)=> {
  let {type, payload={} } = action;
  console.log('r-4',payload.data)
  switch (type) {
    case "GET":
    return [...state,payload.data];
    default:
    return state;
  }
}