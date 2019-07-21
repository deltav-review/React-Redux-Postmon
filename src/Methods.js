import React from 'react';
const Methods = (prop) => {
  return (
    <ul className='methods'>
      <li onClick={() => prop.onMethod('GET')} id='get' >Get</li>
      <li onClick={() => prop.onMethod('POST')} id='post'>POST</li>
      <li onClick={() => prop.onMethod('PUT')} id='put' id='put'>PUT</li>
      <li onClick={() => prop.onMethod('DELETE')} id='delete' >DELETE</li>
      <li><button type='submit'>go</button></li>
    </ul>

  )

}
export default Methods;