import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Conditionally from './Conditionally/Conditionally';
import ListsAndKeys from './ListsAndKeys/ListsAndKeys';
import StylingComponent from './StylingComponent/StylingComponent';

class App extends Component {

  state={
    persons:[
      {name:'Molabanti Koteswara Rao',age:'22'},
      {name:'Uma',age:'24'}
    ]
  }
 
//  switchNameHandler(){  //if we are writing normal function then this keyword won't refer state property.so we wil use arrow functon.
//    console.log('Button is clicked');  
//    console.log(this.state.persons[0].name)
//  } 
   
   switchNameHandler=(newName)=>{
      console.log('Button is clicked');
      console.log(this.state.persons[0].name);
      // this.state.persons[0].name='ravi kiran'; // Do not mutate state directly. Use setState().
      // we can't change state properties directly. we need to use setState() method to change.
      // setState() method updates state property values, after that it tells react to change dom. 
      // only state and props are things that leads to update dom in react.
      this.setState({
         persons:[
            {name:newName,age:'24'},
            {name:'Sainath',age:'24'}
        ]
      })
   }

   changeNameHandler=(event)=>{
    this.setState({
      persons:[
         {name:event.target.value, age:'24'},
         {name:'Sainath',age:'24'}
      ]
     })
   }
   

 render() {
   //inline styles we will write in this way.
   const style={
     backgroundColor:'red',
     border:'1px solid blue',
     padding:'8px',
     cursor:'pointer'
   };
  return (
    <div className="App">
      <h1>hi react app this is M Koteswara Rao</h1>
      <button style={style} onClick={this.switchNameHandler.bind(this,'Harsha')}>Button</button> 
      {/*  
         --> Handling events with React elements is very similar to handling events on DOM elements.
             There are some syntactic differences are there.
             In normal Dom method is onclick(), where as in react method is onClick().
             and after handler method don't write parenthesis.
         --> to pass parameters to handler method, we have two ways they are
             1) this.switchNameHandler.bind(this,'parameters')
                first parameter inside bind() this keyword referes to An object to which the this keyword 
                can refer inside the new function.
                second parameter is data we want to pass to handler method.
             2) {(e) => this.switchNameHandler(id, e)} (arrow function type) 
         --> We generally recommend binding in the constructor or using the class fields syntax, then arrow 
             function to avoid this sort of performance problem.                                 
      */}
      <Person  name={this.state.persons[0].name} age={this.state.persons[0].age} 
               click={this.switchNameHandler.bind(this,'chakri')} change={this.changeNameHandler}>
               My Hobbies : Reading NEWS Paper </Person>
      <Person name="Uma" age="24">My Hobbies : Playing Cricket </Person>
      <Conditionally></Conditionally>
      <ListsAndKeys></ListsAndKeys>
      <StylingComponent></StylingComponent>
    </div>
  ); 

  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'This is H1 tag'),' Hi M Koteswara Rao ');
 }
}

export default App;




/* --> normally we need to write 
         React.createElement('div',{className:'App'},React.createElement('h1',null,'This is H1 tag'));
       but writing this type of code very difficult. to over come this react comes with JSX.
   --> JSX is Not Really HTML. (javascript XML)
       jsx looks like a html but while compiling it converts into javaScript. 
       jsx allows us to write html code in javascript file. 
   --> what ever code we write inside jsx, it has different attributes for each tags and elements.
       but <div class="App"></div> , in this example class attribute name and javascript class both are eqully,
       they changed name to className.<div className="App"></div>  .
   --> In jsx, letters with lowercase are consider as native html elements.
       so we need to give capital letters for custom components selectors.  
       suppose if we write lowercase for first letter then it gives below warning.and component won't renders.
       The tag <person> is unrecognized in this browser. If you meant to render a React component, 
       start its name with an uppercase letter.
   --> we can use state property inside class-based components only. we can't use state property inside
       Functional components.
   --> we can also pass method references between components. to pass method reference to child component,
       we will write same way how we pass properties. In child component we will get that reference 
       using props.click. so that child component can change state of parent component.  
              
 * 
 */

 /**
  *  --> Components are the core building block of React apps. 
  *      Actually, React really is just a library for creating components in its core. 
  *  --> A typical React app therefore could be depicted as a component tree - having 
  *      one root component ("App") and then an potentially infinite amount of nested child components.
  *  --> Each component needs to return/ render some JSX code - it defines which HTML code React 
  *      should render to the real DOM in the end. 
  *  --> JSX is NOT HTML but it looks a lot like it. 
  *      Differences can be seen when looking closely though (for example className in 
  *      JSX vs class in "normal HTML"). JSX is just syntactic sugar for JavaScript, 
  *      allowing you to write HTMLish code instead of nested React.createElement(...) calls.
  *  --> When creating components, you have the choice between two different ways: 
  *      1. Functional components (also referred to as "presentational", "dumb" or "stateless" components 
  *         - more about this later in the course) => const cmp = () => { return <div>some JSX</div> }
  *         (using ES6 arrow functions as shown here is recommended but optional) 
  *      2. class-based components (also referred to as "containers", "smart" or "stateful" components)
  *          => class Cmp extends Component { render () { return <div>some JSX</div> } }  
  *
  */
 /**
  *  --> Babel 
  *  --> Babel is a JavaScript compiler that includes the ability to compile JSX into 
  *      regular JavaScript.
  *  --> Babel's npm module's name is babel-core . You're going to install babel-core slightly
  *      differently than you installed react and react-dom. 
  */
