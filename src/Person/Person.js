import React from 'react';
import './Person.css'
import PropTypes from "prop-types";
 
const person =(props)=>{
//   console.log(props); 
  return (
     <div className="Person"> 
        {/* <p>this is person component. Age is {Math.floor(Math.random()*30)} </p>    */}
        <p onClick={props.click}>Hi my name is {props.name}. My age is {props.age}</p>
        <p>{props.children}</p>
        {/* <button onClick={props.click}>click</button> */}
        <input className="form-control" type="text" onChange={props.change} value={props.name}/>
     </div>
  )
};

person.propTypes={
   name:PropTypes.string,
   age:PropTypes.string, 
   click:PropTypes.func,
   change:PropTypes.func
}
//propTypes are used to validate props.

export default person;


/**
 * --> To write a JavaScript expression within JSX you will have to surround the JavaScript code
 *     in { } brackets.
 * --> To return multiple lines we need to write inside the () brackets.
 *     React element has to return only one element. You'll have to wrap both of your tags 
 *     with another element tag.
 * --> To get data passed as a inputs to components, we will use props.name or props.age. in case of 
 *     Functional components. where as in case of class-based components we need to use this.props.name.
 *  
 * --> props.children is used to get data passed in between components tags.
 */