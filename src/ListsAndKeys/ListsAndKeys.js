import React from 'react';

class ListsAndKeys extends React.Component{
    state={
    persons:[
          {name:'sainath',age:'23', location:'vizag',id:1},
          {name:'Harsha',age:'23', location:'USA',id:2},
          {name:'Murali',age:'24', location:'Podili',id:3},
          {name:'Krishan',age:'23', location:'vizag',id:4}
        ]
    }
    
    deletePersonHandler=(index)=>{
       console.log(index);
    //    let newpersonlist=this.state.persons; 
       /* In this case newpersonlist contains reference of persons. so it is not correct way. we need to copy 
          persons array to newpersonlist array.
          we can copy one array to another array in two ways. they are 
          1) let newpersonlist=this.state.persons.slice() , array.slice() with empty parameters 
             will returns new array of copy.
          2) other way is using spread operator.
               let newpersonlist=[...this.state.persons];
       */
       const newpersonlist=[...this.state.persons]
       newpersonlist.splice(index,1);
       this.setState({                   //if we write persons data inside state then only react we identifies changes and render dom.
           persons:newpersonlist
       })
    }

    nameChangeHandler=(event, id)=>{
        //    console.log(event.target.value)
           const personindex=this.state.persons.findIndex(p=>{
               return p.id===id
           });

           const person={
               ...this.state.persons[personindex]
           }
        //    console.log(person);
           person.name=event.target.value;
           const persons=[...this.state.persons]
           persons[personindex]=person;
        //    console.log(persons)
           this.setState({persons:persons})
           
    }
    render(){
       
       /*  Inside map() method .
           if we are not writing { } brackets for arrow function 
           then no need to write return statement.
           if we are writing { } brackets for arrow function then we need to 
           write return statement.
       */
       let personsList=this.state.persons.map((person,index)=>  
            <li key={person.id} onClick={this.deletePersonHandler.bind(this,index)}> {person.name} is from  {person.location} and his age is {person.age}</li>
        );
        
       let personsList1=this.state.persons.map((person,index)=>{
           return (
               <div key={person.id}>
                  <li>{person.name} is from  {person.location} and his age is {person.age}</li>
                  <input type="text" onChange={(event)=>this.nameChangeHandler(event,person.id)}  />
               </div>
           )
       }) 
       return(
            <div className="Person">
                <h2>Lists And Keys Component</h2>
                {personsList}
                <h4>list and input tags with two way binding</h4>
                {personsList1}

            </div>
       )
    }
}

export default ListsAndKeys;


/** --> Lists is nothing but *ngFor in angular.
 *  --> In React everything is javaScript only. so we will use javaScript concepts. 
 *      Ex: map() method of array will returns new array based on our condition.
 *  --> using  map() method will get new array. after that we will display that array 
 *      using { } inside return.       
 */
/** --> Keys
 *  --> Keys help React identify which items have changed, are added, or are removed. 
 *      Keys should be given to the elements inside the array to give the elements a stable identity: 
 *  --> Keys should be unique so that components maintain their identity across updates.
 *  --> Keys used within arrays should be unique among their siblings. 
 *      However they don’t need to be globally unique. We can use the same keys 
 *      when we produce two different arrays.
 *  --> A good rule of thumb is that elements inside the map() call need keys. 
 */
