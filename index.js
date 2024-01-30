/* this express is a function which we want to execute */

const express = require("express");

/* express() function will return us some values */
/* we will store these values into a variable named 'app' */
/* this app is going to create our server side application */

const app = express();
/* this app (or shall say express function) is an 
Object which holds many important methods. */

/* one of the most used method is listen() */

/* 

listen(): it listens for incoming requests. 
it waits for incoming API requests.
it takes in two parameters -> 

1. port - connection point. common are 3000 or 8080

2. callback function - when a request will be received through the port
that is when app will listen for a port, the server will run and will
execute this callback function.

*/

let port = 3000;

app.listen(port, () => {
   console.log(`the server is running at port: ${port}`);
});

/* Let us check if server is running or not.
   Let us node index.js on terminal

   yes it is running and showing the message:

   the server is running at port: 3000
*/

/* note now that the server is continuously now running,
listening for requests and thus the terminal is not showing our 
directory.

to stop the server we can write on terminal: control+c
*/

/*

We will learn how to send responses now.

For that we need to use - use() function of the express function.

That is app.use((req, res) => { })

What is use()? - This will listen to any requests we send, either
POST or GET or through any port, it will listen and execute a callback
function.

let's try to console.log('Request is received') using use() function.

*/

// app.use((req, res) => {
//    console.log("Request is received");
// });

/* 
Notice that nothing will happen apart from whenever
we are going to the URL- localhost:3000, it is saying
`request is received` but we have not set up any response.

Atleast we can confirm that request is received.
*/

app.use((req, res) => {
   console.log("Request is received");
   res.send("<h1>First Response in Express</h1> <button>Click Me</button>");
});

/* Now go to the browser and check out */
