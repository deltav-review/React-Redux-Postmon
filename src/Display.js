import React from 'react';

const Display = (props) => {
  return (
    <div disabled type='text' className='width' name='textarea' placeholder='text'>{JSON.stringify(props.data)}</div>
  )
}

export default Display;