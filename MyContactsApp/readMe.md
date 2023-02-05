Create a contact list app , using express

1.implementing routing
2.implementing EJS view engine template
3.implementing get routes , rendering contact lists using ejs temp
4.implementing input form , reading data , using urlencoded()==> body parser
5.implementing post route
6.implementing middleware, the MW function is to go through MW before passing the control to get/post route
7.implemented Express.js req.params/req.query Property

<!-- .........///////////.................. -->

rendering loops or conditions in ejs template
<% %>
<%= %> //for printing any value

<!-- ................Steps......................... -->

1.Create app.js
2.npm init , to setup up our project
3.include express , npm i express
4.start a server (require express, listen on port)
5.sending data to ejs template(npm i ejs)
6.use ejs as view engine
7.path of views
8.created ejs file
9.render out page through the route/controller function
10.include middleware(app.use(express.urlencoded())) where it reads the data and parses it.into keys and value pair
11.form+post request
12.handling static files 13. use app.use(express.static('assests'))//paths of the static folders
14.in ejs file , the path starts from assets , href='/css/contact.css'

\\...........Express req.params/query ............//

params
<a href="/delete-contact/<%= arr[i].phone%>">
app.get("/delete-contact/:phone", (req, res) => {
console.log(req.params);
});

//query
<a href="/delete-contact/?phone=<%= arr[i].phone%>">
app.get("/delete-contact/", (req, res) => {
console.log(req.query);
});
