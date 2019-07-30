first thing when starting this project on react
in terminal - create-react-app todo-list
next cd into the folder todo-list and open on vscode.
next install bootstrap and uuid
npm install bootstrap uuid
 we run our app in the browser using npm start

 <!-- creating components -->
 we create a new component folder where all our component files will reside, 
 we then create the component files which we will need
  Todoinput.js, Todolist.js and todoItem.js

  Todoitem is imported inside the TodoList and both todolist and todoinput is imported into the app.js folder.

next we import bootstrap into app.js file 
import 'bootstrap/dist/css/bootstrap.min.css';

next import uuid into app.js file.
import uuid from 'uuid'
