import React,{Component} from 'react';
import Component1 from './component1';
// import Hoc from '../hoc/hoc';
class ComponentLifeCycle extends Component{
    constructor(props){
        super(props);
        console.log('[ComponentLifeCycle.js] inside constructor',);
    }

    UNSAFE_componentWillMount(){
        console.log('[ComponentLifeCycle.js] inside componentWillMount() ');
    }

    componentDidMount(){
        console.log('[ComponentLifeCycle.js] inside componentDidMount() ');
        this.inputElement.focus(); //to focus input element in react we will use ref in input tag. 
    }
    
    state={
        name:'molabanti koteswara rao'
    }
    
    changeNameHandler=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    render(){
        console.log('[ComponentLifeCycle.js] inside render()');

        return(
            <div className="Person"> 
                  <h2>LifeCycle Component </h2>  
                  <input ref={(inp)=>{this.inputElement=inp}}     type="text" name="name"  onChange={this.changeNameHandler}  />
                  <Component1 name={this.state.name} ></Component1> 
                  {/* --> to pass routing properties to components, which are displayed without routng 
                          we will use {...this.props}. 
                      --> if we want to pass specific properties then we use match={this.props.match}.
                      --> In another way is Using withRouter Hoc, inside the component.       
                */}
            </div>
        )
    }
} 

export default ComponentLifeCycle;


/**----------------------------Component Life Cycle----------------------------
 *  --> We Can use Component life Cycle methods only inside components created with class.
 *      we can't use components methods inside functional components.
 *  --> the following lifecycle methods will be executed only when component creation.
 *  --> order of execution of this methods is
 *       1) constructor
 *       2) componentWillMount
 *       3) render
 *       4) componentDidMount  
 *  --> Inside render method if any child components are presented. then it will execute same methods,
 *      after that it will execute componentDidMount() method.
 *  --> In latest versions of react, to implement asynchronous rendering ,they are removed some life cycle
 *      methods. they are componentWillMount,componentWillReceiveProps,componentWillUpdate. 
 *      to use above there methods keep prefix UNSAFE_. otherwise it will shows warning.
 *  --> In previous versions we will define state inside constructor. but in latest versions we can 
 *      define state outside also. 
 *  --> we can't fetch data using constructor,componentWillMount methods, it will works fine but it may causes
 *      side effects.
 *  --> we can use componentDidMount() method to fetch data.
 */

