
import React from 'react';
import ReactDOM from 'react-dom';



const template = <h1>Testing one two three --- this is jsx from WEBPACK !!! </h1>
//const template = React.createElement('h1', {}, 'test 123') // to run w/o babel
ReactDOM.render(template, document.getElementById('app'))
