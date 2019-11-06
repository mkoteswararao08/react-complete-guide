import React,{Component} from 'react';
import WithClass from '../hoc/withClass';

class Conditionally extends Component{
   state={
       persons:[
           {name:'murali',age:24},
           {name:'Sainath',age:24}
       ],
       showPersons:true,
       toggleCount:0 
   } 
   
   togglePersonHandler=()=>{
       const showPersonsValue=this.state.showPersons;
       this.setState((prevState,props)=>{          //we can do it normal way also.But setState method will execute asynchronous way so it won't give correct output in every time.
         return {  
                    showPersons:!showPersonsValue,
                    toggleCount:prevState.toggleCount+1
                }
        })
   }  
   
   render(){
       
      let persons=null;

      const style={
          backgroundColor:'green',
          border:'1px solid pink',
          padding:'8px',
          cursor:'pointer'
      };

      if(this.state.showPersons){
          persons=(
            <div>
                <p>Data Toggles using if condition inside the render() method</p>
                <p>Hi this {this.state.persons[0].name} And My Age is {this.state.persons[0].age}</p>
                <p>Hi this {this.state.persons[1].name} And My Age is {this.state.persons[1].age}</p>
            </div>
          )
          style.backgroundColor='red';
      }

       return (
            <WithClass classes="Person">   
               <h2>Conditional Operator</h2>
              { 2==3 ? <p>hi koti</p> :null }
              <button  style={style}   onClick={this.togglePersonHandler}>Toggle Data</button>
              { this.state.showPersons === true ?
                <div>
                   <p>Data Toggles using ternary operator</p>
                   <p>Hi this {this.state.persons[0].name} And My Age is {this.state.persons[0].age}</p>
                   <p>Hi this {this.state.persons[1].name} And My Age is {this.state.persons[1].age}</p>
                </div>
                : null
              } 
              {persons} 
           </WithClass> 
       )
   }
}

export default Conditionally;

/*  
   -->ternary operator in javascript (? :)
      ->this operator is nothing but if else condition.
      ->var userType = userIsYoungerThan18 ? "Adult" : "Minor";
        if userIsYoungerThan18 value is true then "Adult" value is assign to userType. otherwise Minor 
        value is assign to userType.
   --> same operator is used in react also. this operator useful to render given component based on 
       condition.     
*/
/** --> when ever react renders the component, it not only renders jsx code inside return. but also 
 *      execute total render() method. so we will use this logic to write conditionally statementes in other way.
 *  --> so for conditionally operator we can use if-else operator directly inside the render() method.
 *      because total render method will execute when ever there is state changes in component.    
 * 
 */