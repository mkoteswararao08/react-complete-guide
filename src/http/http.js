import React from 'react';
import axios from 'axios';

class Http extends React.Component{
    state={
        data:[]
    }
    componentDidMount(){
       axios.get("https://jsonplaceholder.typicode.com/posts?userId=1").then((response)=>{
        //    console.log(response);
           this.setState({
               data:response.data
           })
       }).catch((err)=>{
           console.log(err)
       })
    }
    
    formSubmit=(event)=>{
       let user={
            id:this.refs.id.value,
            title:this.refs.title.value,
            body:this.refs.body.value
        }
        axios.post("https://jsonplaceholder.typicode.com/posts",user).then((response)=>{
            console.log(response);
        })
        event.preventDefault(); 
    }

    deleteHandler=()=>{
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+1).then((response)=>{
            console.log(response);
        })
    }

    render(){
            let datas=this.state.data.map((da,i)=>{
                return(
                    <tr key={i}>
                        <td>{da.id}</td>
                        <td>{da.title}</td>
                        <td>{da.body}</td>
                    </tr>
                )
            })
        return(
            <div className="Person">
                <h2>Http Component</h2>
                <div>
                    <h3>GET Method</h3>
                    <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>  
                    <tbody> 
                            {datas}
                    </tbody>                
                    </table>
                </div>
                <div>
                    <h3>POST Method</h3>
                    <div className="container"> 
                      <form onSubmit={this.formSubmit}>
                        <div className="form-group">
                            <label>ID</label>
                            <input className="form-control InputElement" ref="id" type="text" name="id" />
                        </div>
                        <div className="form-group">
                            <label>Title</label>
                            <input  className="form-control" ref="title" type="text" name="name" />  
                        </div> 
                        <div className="form-group">
                            <label>Body</label>
                            <input className="form-control" ref="body" type="text" name="age" />
                        </div> 
                        <button  className="btn btn-success">Submit</button> 
                    </form>
                   </div>
                </div>
                <br></br>
                <div>
                     <h3>DELETE Method</h3>
                     <button onClick={this.deleteHandler}>DELETE</button>
                </div>
            </div>
        )
    }
}

export default Http;