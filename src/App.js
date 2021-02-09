import React, { Component } from "react";
import BlogPost from "./BlogPost.js";
import ColorBox from "./ColorBox.js";

class App extends Component {
  // Nothing needs to change here!
  // Make note of what prop we are initially passing to `ColorBox` below!

  render() {
    return (
      <div id="app">
        <BlogPost />
        <div id="seperator"></div>
        <div className="wrapper">
          <ColorBox opacity={1} />
        </div>
      </div>
    );
  }
}

export default App;


/*
Function Version of Above Component (It doesn't have a render method, it just returns the JSX)

function App() {
  return (
    <div id="app">
      <BlogPost />
      <div id="separator"></div>
      <div className="Wrapper"></div>
      <ColorBox opacity={1}></ColorBox>
    </div>
  );
}

Components are Functions that return JSX 

React Class Based Components 
The main difference with these is that they have life cycle methods, they all have to have render() 
render is what tells react how to render this component. When you use the App component (index.js) tells the react to get that class, render it and put the JSX into the specified DOM node. 
It's set up by having components that have a render method, or functional components that return jsx.  
*/
