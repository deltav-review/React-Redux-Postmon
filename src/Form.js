
import React from 'react';
import Methods from './Methods';
import TextBox from './TextBox';
import Display from './Display';
const axios = require('axios');


class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      method: 'GET',
      url: '',
      data: {},
      textbox: '',
      username: '',
      password: ''
    }

  }

  handleMethod = (method) => {
    console.log(method)
    this.setState({
      method: method,
      url: '',

    })
  }

  go = (e) => {
    e.preventDefault();
    let url = e.target.url.value;
    if (this.state.method === 'GET') {
      axios.get(url)
        .then((response) => {
          // handle success
          this.setState({
            data: response
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })


    } else if (this.state.method === 'POST') {
      axios.post(url, this.state.textbox)
        .then((response) => {
          // handle success
          this.setState({
            data: response
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

    }else if (this.state.method === 'DELETE') {
      axios.delete(`${url}/${this.state.textbox}`, this.state.textbox)
        .then((response) => {
          // handle success
          this.setState({
            data: response
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

    }else if (this.state.method === 'PUT') {
      axios.post(url, this.state.textbox)
              .then((response) => {
          // handle success
          this.setState({
            data: response
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

    }
  }
auth = () => {
  axios.post('https://videogame-marketplace.herokuapp.com/api/#/Authentication/post_signin', {
    "username": this.state.username,
    "password": this.state.password,
    "role": "admin"
  })
        .then((response) => {
          // handle success
          this.setState({
            data: response
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

}
  handleChange = (text) => {
    this.setState({ textbox: text.target.value })
    const name = {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
}

handleChangeAuth =(text)=> {
 this.setState({
   [text.target.name] :text.target.value
 })

}
  render() {
    return (
      <form onSubmit={this.go} className='main'>
        <div className='sectionLeft'>
          <p className='text'>History</p>
        </div>
        <div className='sectionRight'>
          <input type='text' className='input-right' placeholder='(get) https://swapi.co/api/people ,(post send object("id: 1,
      title: foo,
      body: bar,
      userId: 1),delete type 1) https://jsonplaceholder.typicode.com/posts' name='url' />
          <Methods onMethod={this.handleMethod} />

          <TextBox basicauth='Basic Authorization' bearertoken='Bearer Token' name='textbox' value={this.state.textbox} handler={this.handleChange} authhandle={this.handleChangeAuth} handleauth={this.auth}/>

          <br />
          <Display basicauth='Basic Authorization' data={this.state.data} />
        </div>
      </form>
    )
  }
}
export default Form;