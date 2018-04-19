# TodoMVC (REACT)

> Todo example built using React.


### Articles

- [Adding Preprocessor to Create React App](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)

## Implementation

The app was created using React by create-react-app.  The index.html which is  placed in the public folder is the entry file, the src folder contains all of the source code and the styles contains all styles by using scss.

Here is the detail

### src
#### components (contains all the components)
* InputText.js (Input Component which use for adding Todo Item)
* Item.js  (Item Component contains all the detail of Item)
* List.js (List Component which contain all items)
* Title.js (Title Component)

#### containers (contains all containers)
* App.js (The entry of application which contain all the data,logic and component)
* Input.js
* ToDoList.js

#### styles
* app.css  (import all the others styles)
* Input.scss
* Item.scss
* List.scss
* Title.scss

#### tests
* this is the place for testing

#### utils
* registerServiceWorker.js 

#### index.js (where react scripts looks for dom render)

## Features


There are some features implemented:

* Three parts of UI, title, input and Todo list.
* When there is no Todos, Todo list is hidden.
* Type Todo in the input and add Todo to the list when click +
* O(complete) and X(remove) will show when Todo item in list is on hover
* Complete Todo item by clicking O and remove Todo item by clicking X
* Whenever Todo item is completed, the item background color will be green.
* Complete all tood items which are not completed
* Remove all Todo items which are completed
* Show the count in Todo list



There are some features in the future:
* Router (react-router)
* Data flow(Redux/Flux)
* Storage(Server/Local storage persistence)
* More ...

## Run
* clone down test-react-todomvc
* cd into test-react-todomvc
* npm install
* npm start
