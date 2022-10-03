Hello, this is the Node.js API for tweet collection in my personnal MERN Twitter project.<br>
It allows you to create, read, update and delete tweet.<br>
<br>
Make a "npm install" command in the server root folder.<br>
You'll need to create a ".env.local" file in the server root to set up the MongoDB cluster.<br>
You'll find an environment example in the ".env" file.<br>
Run "npm start" command.<br>
<br>
You can try the API with Postman, routes are:<br>
POST method: "/tweet" create a tweet<br>
GET method: "tweet" see all tweets<br>
GET method: "tweet/:id" see a tweet<br>
PATCH method: "tweet/:id" update a tweet<br>
DELETE method: "tweet/:id" delete a tweet<br>