//server.js
const express = require('express');
const server = express();

//Flash notifications;
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');

server.use(cookieParser('secret'));
server.use(session({cookie: { maxAge: 60000 }}));
server.use(flash());


//DB
const mongoose = require('mongoose');
// DB Config
const db = require('./config/keys').mongoURI;
const Student = require('./models/student');
const Faculty = require('./models/faculty');

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


//setting the port.
server.set('port', 3000);

server.use(express.json());       // to support JSON-encoded bodies
server.use(express.urlencoded()); // to support URL-encoded bodies

server.use(express.static('public'));

//Adding routes
server.get('/',(request,response)=>{
 response.sendFile(__dirname+'/public/register.html');
});

server.post('/',(request,response)=>{
 console.log(request.body);

 //Store user credentials to MongoDB
 data={name:request.body.name,type:request.body.type,email:request.body.email,pattern:request.body.pattern}
if(data.type=="student"){
 Student.findOne({ email: request.body.email }).then(user => {
      if (user) {
       //TODO 
       console.log("Student Email already exists!");
        request.flash("Student Email already exists!");
   

       
      } else {

      		const newUser = new Student(data);
      		newUser.save();
                      
 }

});

}

else{

Faculty.findOne({ email: request.body.email }).then(user => {
      if (user) {
       //TODO 
    console.log("Faculty Email already exists!");
	request.flash("Faculty Email already exists!");
       
      } else {

      		const newUser = new Faculty(data);
      		newUser.save();
                      
 }

});





}

 });

//Binding to localhost://3000
server.listen(3000,()=>{
 console.log('server started at port 3000');
});


module.exports=server