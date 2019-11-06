import React,{Component} from 'react';
import Radium from 'radium';
// eslint-disable-next-line
import personcss from '../Person/Person.css'
import st from './StylingComponent.module.css'

class StylingComponent extends Component{
    state={
        showButton:false,
        count:3
    }
   
    toggleShowButton=()=>{
       const showButtonValue=this.state.showButton;
       this.setState({showButton:!showButtonValue})
    }
    
    countReduceButton=()=>{
       let countValue= this.state.count-1;
       this.setState({
           count:countValue
       })
    }

    render(){
        //inline styles 
       const style={
              backgroundColor:'green',
              border:'1px solid pink',
              padding:'8px',
              cursor:'pointer',
              ':hover':{
                backgroundColor:'lightgreen',
              }
          }
        

        if(this.state.showButton){
            //To set styles dynamically
            style.backgroundColor='pink';
            style[':hover'].backgroundColor="orange"
        }
        
        /**------------------to Add class names Dynamically-----------*/
        // let classes=['red','bold'].join(' ');
        let classes=[] 
        if(this.state.count<=2){
            classes.push('red'); 
        } 
        if(this.state.count<=1){
            classes.push('bold');
        }

        return(
            <div className="Person"  >
                <h2 className={st.koti}>Styling Component</h2>  
                {/* to apply local css*/}
                <button style={style} onClick={this.toggleShowButton}>Toggle Button</button>
                <br/><br/>
                <p className={classes.join(' ')}  onClick={this.countReduceButton}>Adding Classes Dynamically</p>
                
            </div>
        )
    }
}

export default Radium(StylingComponent);//TO use Radium module we will write in this way.
// export default StylingComponent;

/** 
 *  --> In React, if add css classes in css file, then are consider as global class.
 *  --> To add inline Styles we will write in this way 
 *        const style={
              backgroundColor:'green',
              border:'1px solid pink',
              padding:'8px',
              cursor:'pointer'
          }
        <button style={style} onClick={this.toggleShowButton}>Toggle Button</button>
    --> But Using inline style we can't add CSS Pseudo-classes (like hover, before, visited).
        To use this we will use radium module. 
    --> Using radium module we can apply media queries also.   
    
    
    --> In latest versions of create-react-app, they are implemented local css.
        By saving file to component.module.css, it makes css file to locally.
        To use this css file we need to import in js file.    
          
    
 *
 */