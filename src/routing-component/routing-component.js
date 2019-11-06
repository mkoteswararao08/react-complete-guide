import React from 'react';
import {Link,Route} from 'react-router-dom';
import NestedRouting from './nested-routing/nested-routing';

class RoutingComponent extends React.Component{
    componentDidMount(){
        console.log(this.props)
    }

    state={
        auth:true
    }
    render(){
        console.log(this.props.match.url)
        return(
            <div className="Person">
                <h1>Routing-Component</h1>
                <li><Link to={this.props.match.url+"/nestedrouting"}>child</Link></li>
                {this.state.auth ? <Route path={this.props.match.path+"/nestedrouting"} component={NestedRouting} /> : null }
                {/* while using child routing don't use exact keyword.*/}
                {/* <Redirect to="/lifeCycleComponent" /> */}
                {/* if we write Redirect inside switch then only we can use from. If we write outside switch then we can't 
                    use from. we can use only to propertis.*/}
                {/* <Route render={()=><h1>Page Not Found</h1>} />  To show default error page */}
            </div>
        )
    }
}

export default RoutingComponent;

/**--------------------Redirect vs history.push()------------------
 *  --> this.props.history.push('/kkk') will add the url to top of the stack. so that page will redirect to 
 *      new url. where as Redirect will removes the current page from stack and places new url.
 *  --> Because of this, if we use push() then we can go back previous page by pressing back button in browser.
 *      where as if we use Redirect then we can't go back to previous page.
 *  --> this.props.history.replace('/kkk') will work same as Redirect. replace() method will replaces current url
 *      with new url. so we can't go back.
 */
/**-----------------------Route Guards----------------------------
 *   --> we can use route guard in two ways.they are  
 *       1) taking auth variable in state. based on true or false, display the Route tag. 
 *           {this.state.auth ? <Route path={this.props.match.path+"/nestedrouting"} component={NestedRouting} /> : null }
 *       2) checking authorization inside the routing component, using lifecycle methods. if authorization fails
 *          then we will navigate to login page.  
 * 
 */