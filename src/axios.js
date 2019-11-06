import axios from 'axios';

const instance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization']='Auth Token';

instance.interceptors.request.use((request)=>{
    console.log(request);
    return request;
},(err)=>{
    console.log(err);
    return Promise.reject(err);
})

export default instance;

/**------------------Axios Instance------------------------
 * --> In Axios we can create our own instances also. By default one axios object is created and shared
 *     to where ever it is called.
 * --> If we use interceptor on that object then for every request that interceptor is called.
 * --> suppose if we want to execute one interceptor to some requests and another interceptor to some other 
 *     interceptor. In that case we will create instances and share that instances to other components.
 * --> Using that instances we will write interceptor, so that requestes called with that instance will go
 *     to that particular interceptor only.
 * --> In this way we can create any number of axios objects.
 * --> At the time of Instance creation we can pass default values also.   
 *     
 * 
 */