import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';

class NavBar extends Component{
    
    render(){
        const navStyle={
             backgroundColor:'rgba(16, 11, 82, 0.88)'
        }
        return(
            <div>
                <nav className="navbar navbar-expand-lg " style={navStyle}>
                    <Link className="navbar-brand" to='/'>React</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                          <NavLink className="nav-item nav-link" to='/'>Home</NavLink>
                          <NavLink className="nav-item nav-link" to={{
                              pathname:"/conditionally",
                              hash:'submit',
                              search:'?name=mkr'
                          }}>Conditionally</NavLink>
                          <Link className="nav-item nav-link" to="/listsAndKeys">Lists And Keys</Link>
                          <Link className="nav-item nav-link" to="/stylingComponent">Styling Component</Link>
                          <Link className="nav-item nav-link" to="/lifeCycleComponent">LifeCycle Component</Link>
                          <Link className="nav-item nav-link" to="/RoutingComponent">Routing Component</Link>
                          <Link className="nav-item nav-link" to="/http">Http</Link>
                          <Link className="nav-item nav-link" to="/forms">Forms</Link>
                     </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;