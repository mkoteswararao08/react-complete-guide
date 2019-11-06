import React from 'react';
import styleclasses from './forms.module.css'

class Forms extends React.Component{
    state={
        inputElements:{
            name:{
               value:'',
               validation:{
                            required:true
                          },
               isValid:false,
               touched:false 
            },
            location:{
                value:'',
                validation:{
                            required:true,
                            minlength:6
                           },
                isValid:false,
                touched:false 
            },
            pincode:{
                value:'',
                validation:{
                            required:true,
                            minlength:6,
                            maxlength:6
                            },
                isValid:false,
                touched:false 
            }
        },
        formIsValid:false
    }
    
    inputClasses = [styleclasses.InputElement,styleclasses.Invalid];

    inputChangedHandler= (event)=>{
        let value=event.target.value;
        let name=event.target.name;
        const updatedInputElement={...this.state.inputElements}
        const updatedFormElement={...updatedInputElement[name]}
        updatedFormElement.value=value;
        updatedFormElement.isValid=this.checkValidity(updatedFormElement.value,updatedFormElement.validation);
        updatedFormElement.touched=true;
        updatedInputElement[name]=updatedFormElement   
        // console.log(updatedInputElement)
        
        // to disabled button.
        let formIsValid=true;
        let inputelement
        for(inputelement in updatedInputElement){
            // console.log(inputelement) each element key is json object is assign to inputelement. using that key we will get value. 
           formIsValid = updatedInputElement[inputelement].isValid && formIsValid; //and(&&) operator is used. otherwise it will gives error because it always checks last input is true or false.
        }
        // console.log(formIsValid); 
        this.setState({
            inputElements:updatedInputElement,
            formIsValid:formIsValid 
        })
    }
    
    formSubmit=(e)=>{
        console.log(this.state)
        console.log()
        e.preventDefault();
    }
    
    checkValidity(value,rules){
       let isValid=true;

       if(rules.required){
           isValid = value.trim() !== '' && isValid;
       }

       if(rules.minlength){
           isValid = value.length >= rules.minlength && isValid;
       }

       if(rules.maxlength){
           isValid = value.length <= rules.maxlength && isValid;
       }

       return isValid;
    }

    
    
    render(){
        return(
            <div className="Person">
                 <h2>Forms</h2> 
                 <form onSubmit={this.formSubmit}>
                    <div className={styleclasses.Input}>
                        <label className={styleclasses.Label}>Name</label>
                        <input className={this.state.inputElements.name.touched ? this.state.inputElements.name.isValid ? styleclasses.InputElement : this.inputClasses.join(' ') : styleclasses.InputElement } onChange={this.inputChangedHandler} name="name" 
                               type="text"  />
                        {this.state.inputElements.name.touched ? this.state.inputElements.name.isValid ? null : <p className={styleclasses.InvalidLabel}>Name can't be Empty</p> : null}       
                    </div>
                    <div className={styleclasses.Input}>
                        <label className={styleclasses.Label}>Location</label>
                        <input className={this.state.inputElements.location.touched ? this.state.inputElements.location.isValid ? styleclasses.InputElement : this.inputClasses.join(' ') : styleclasses.InputElement } onChange={this.inputChangedHandler} name="location"
                               type="text"  />
                        {this.state.inputElements.location.touched ? this.state.inputElements.location.isValid ? null : <p className={styleclasses.InvalidLabel}>Location can't be Empty or Minlength required is 6</p> : null}       
                    </div>
                    <div className={styleclasses.Input}>
                        <label className={styleclasses.Label}>PIN CODE</label>
                        <input className={ this.state.inputElements.pincode.touched ? this.state.inputElements.pincode.isValid ? styleclasses.InputElement : this.inputClasses.join(' ') : styleclasses.InputElement } onChange={this.inputChangedHandler} name="pincode"
                               type="text"  />
                        {this.state.inputElements.pincode.touched ? this.state.inputElements.pincode.isValid ? null : <p className={styleclasses.InvalidLabel}>PINCODE can't be Empty or Minlength and Maxlength required is 6 </p> : null}       
                    </div>
                    <button className="btn btn-success" disabled={!this.state.formIsValid}>Submit</button>
                 </form>
            </div>
        )
    }
}

export default Forms;