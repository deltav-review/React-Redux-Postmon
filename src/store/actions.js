
export const get =(payload) => {
  return {
    type: 'GET',
    payload
  }
};
export const delete1 =(payload) => {
  console.log('d-17')
  return {
    type: 'DELETE',
    payload
  }
};
export const post =(payload) => {
  return {
    type: 'POST',
    payload
  }
};

