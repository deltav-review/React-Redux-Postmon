const initialState =[];
export default (state = initialState, action)=> {
  let {type, payload={} } = action;
  console.log('r-4',payload.status)
  switch (type) {
    case "GET":
    return [...state,payload.data];

    case"POST":
    return [...state, payload.data];
    case"DELETE":
    return [...state, payload.status];
    default:
    return state;
  }
}