import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Person from './Person/Person';
import axios from 'axios';

// axios.defaults.baseURL="https://jsonplaceholder.typicode.com";  //we can add headers using default also.
// axios.defaults.headers.common['Authorization']="Auth Token";
// axios.defaults.headers.post['Content-Type']='application/json';

axios.interceptors.request.use((request)=>{
    console.log(request);
    return request;
},(err)=>{
    console.log(err);
    return Promise.reject(err);
});

axios.interceptors.response.use((response)=>{
    console.log(response);
    return response;
},(err)=>{
    console.log(err);
    return Promise.reject(err);
})


ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Person name="Ravi kiran" age="24"></Person>,document.getElementById('root2'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
