
export const get =(payload) => {
  console.log('l-3 action ', payload)
  return {
    type: 'GET',
    payload
  }
};