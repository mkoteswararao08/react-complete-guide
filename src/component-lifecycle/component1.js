import React from 'react';
// import {withRouter} from 'react-router-dom';

// class Component1 extends React.PureComponent{ // if we are using PureComponent then don't use shouldComponentUpdate(). because it is already present inside of pureComponent.  
class Component1 extends React.Component{
    constructor(props){
       super(props);
       console.log('[Component1.js] inside constructor',props);
    }

    UNSAFE_componentWillMount (){
        console.log('[Component1.js] inside componentWillMount() ');
    }
    
    componentDidMount(){
        console.log('[Component1.js] inside componentDidMount() ');
    }
    
    UNSAFE_componentWillReceiveProps (nextProps){
        console.log('[UPDATE Component1.js] inside componentWillReceiveProps() ',nextProps); 
        //this method will executed only when properties get changed.
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('[UPDATE Component1.js] inside shouldComponentUpdate() ',nextProps, nextState); 
        // this method will executed when properties or state get changed.In this method we need to return boolean value.
        // Based on return value it will process render method. if we return true then it will calls render method.
        // if return false then it won't calls render method.
        return true;
    }

    UNSAFE_componentWillUpdate(nextProps,nextState){
        console.log('[UPDATE Component1.js] inside componentWillUpdate() ',nextProps, nextState);
    }

    componentDidUpdate(){
        console.log('[UPDATE Component1.js] inside componentDidUpdate() ');
        //this method will be called after update. that is after render method.
    }

    state={
        persons:[
            {name:'sainath',age:'23', location:'vizag',id:1},
            {name:'Harsha',age:'23', location:'USA',id:2},
            {name:'Murali',age:'24', location:'Podili',id:3},
            {name:'Krishan',age:'23', location:'vizag',id:4}
          ],
        show:true     
    }

    deletePersonHandler=(index)=>{
        console.log(index);
        const newpersonlist=[...this.state.persons]
        newpersonlist.splice(index,1);
        this.setState({                 
            persons:newpersonlist
        })
     }

     render(){
         console.log('[Component1.js] inside render()');
         let personsList=this.state.persons.map((person,index)=>  
            <li key={person.id} onClick={this.deletePersonHandler.bind(this,index)}> {person.name} is from  {person.location} and his age is {person.age}</li>
        );

         return(
             <div className="Person">
                 <p>Component1 {this.props.name}</p>
                 {personsList}
                 <button onClick={()=>{this.setState({show:true})}}>click</button>
             </div>
         )
     }  
}

// export default withRouter(Component1); //to get router properties. we will use withRouter Higher order component.
export default Component1;

/**------------------------------Component Lifecycle–Update--------------------
 *  --> Same way as component life cycle create methods. there are component lifecycle update methods.
 *      update methods will executes only when anything gets updated.
 *  --> these methods executions order is 
 *      1) componentWillReceiveProps(nextProps)
 *      2) shouldComponentUpdate(nextProps,nextState)
 *      3) componentWillUpdate(nextProps,nextState)
 *      4) render()    
 *      5) componentDidUpdate()
 *  --> first and third methods are removed in latest versions.
 * */ 
/**------------------------Pure component-----------------------
 *  --> If any value in state is setting same value again, using setState() method.then react dom will execute 
 *      component update lifecycle methods. including render() method also.
 *  --> Because same value are present in state, so it wont't  render to main dom. but it is executing 
 *      render() method.
 *  --> If no value changes in state then we need to stop executing render() method. To stop executing of 
 *      render() method we will check inside shouldComponentUpdate() method. if no value changes then 
 *      we will return false. if any value changes then we will return true.
 *  --> based on true or false it will executes render() method.
 *  --> In normal component we need to write shouldComponentUpdate() method and check state is changed or not.
 *      To do this operation automatically react provided PureComponent class. 
 *  --> If our component extends PureComponent then it will contains shouldComponentUpdate() implementation.
 *      so it will checks whether values in state are changed or not. if values changes then only it will calls
 *      render() method. 
 *  --> check video number:88 (udemy)
 */

/**--------------------------Real Dom and virtual Dom--------------------
 * --> After executing render() method, react will forms Re-rendered virtual dom. 
 * --> react also having old virtual Dom, it will checks Re-rendered virtual dom with old virtual dom.
 * --> if any differences are found then it will updates real dom. if no differences are found between
 *     Re-rendered virtual dom and old virtual dom. then it won't update real dom.
 * --> While updating real dom, it won't renders total real dom again. react will check what are the differences
 *     between real dom and virtual dom, it will renders differences only in real dom. 
 */