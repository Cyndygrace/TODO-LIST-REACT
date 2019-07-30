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

next we import google font link into our index.html

<!-- track changes -->
first in our App.js component, we set a default state to track changes for when items will be created, edited, deleted and displayed 

next we write a function to listen and handle these changes.

next we pass the value handlechange method and default state of the item into the prop nested todoinput component

then we go to the todoInput component file to destructure  the value of the item and handlechange method and the in the for set value = the item

inorder to capture the event that is being passed on in the input field, we create a handlesubmit function,
so that onsubmit, we first call preventDefault() method on the event. this prevents the page from reloading and we loosing the typed event when we click the submit button

