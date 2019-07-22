
import React from 'react';
import {connect} from 'react-redux';
import * as actions from "./store/actions.js";

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
    console.log('go-34')

    e.preventDefault();
    let url = e.target.url.value;
    if (this.state.method === 'GET') {

      axios.get(url)
        .then((response) => {
          console.log('get-43', response)
          // handle success
          // this.setState({
          //   data: response
          // })
          this.props.handleGet(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })


    } else if (this.state.method === 'POST') {
      axios.post(url, this.state.textbox)
        .then((response) => {
          // handle success
          // 
          this.props.handlePost(response);

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
          console.log('d-75', response)
          // this.setState({
          //   data: response
          // })
          this.props.handleDelete(response);

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
    console.log('l-129',text)
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
          <Display basicauth='Basic Authorization' data={this.props.method} />

        </div>
      </form>
    )
  }
}
const mapStateToProps=(state)=> ({
 method: state.reducer

});

const mapDispatchToProps = (dispatch, getState)=>({
  handleGet: (data) =>  dispatch(actions.get(data)),
  handlePost: (data) =>  dispatch(actions.post(data)),
  handleDelete: (data) =>  dispatch(actions.delete1(data))


});

export default connect(mapStateToProps,mapDispatchToProps)(Form)
