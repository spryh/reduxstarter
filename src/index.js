import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
/*import 'bootstrap/dist/css/bootstrap-theme.css';*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//This is covered in SG lecture 5-11
//Create a new component that produces HTML
// Take HTML and render to page
