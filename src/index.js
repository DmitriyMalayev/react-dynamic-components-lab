import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

/*
React Class Based Components 
The main difference with these is that they have life cycle methods, they all have to have render() 
render is what tells react how to render this component. When you use the App component (index.js) tells the react to get that class, render it and put the JSX into the specified DOM node. 
It's set up by having components that have a render method, or functional components that return jsx.  
*/