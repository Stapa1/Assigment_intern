// Instantiating new EasyHTTP class
const http = new DeleteHTTP;
  
// Update Post
http.delete('https://jsonplaceholder.typicode.com/posts/4')
  
// Resolving promise for response data
.then(data => console.log(data))
  
// Resolving promise for error
.catch(err => console.log(err));
