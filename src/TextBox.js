import React from 'react';
const TextBox =(prop) => {
  return (
    <>
    <textarea className='text-box' name='textarea' onChange={prop.handler} placehoder="
      id: 1,
     title: 'foo',
     body: 'bar',
     userId: 1'"
    />
    <div className='button-box'>
    <button className='left' onClick={prop.handleauth}>Headers</button>
    {prop.basicauth}
    <br />

    <input type='text' placeholder='username' name='username' placeholder='floyd' onChange={prop.authhandle}/>

    <input type='text' placeholder='4321' onChange={prop.authhandle} name='password'/>

    <br />
    {prop.bearertoken}
    <input type='text' className='left'/>
    </div>
    </>
  )

}

export default TextBox;