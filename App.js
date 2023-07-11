import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Hello Jay");

// jsx is javascript syntax for creating react element
// jsx is like a convention when we kind merge for html and js together

// jsx - is not html in JS
// JSX - HTML - like syntax or xml-like syntax
//JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX = React.createElement => ReactElement - JSObject => HTMLElement(render)

const TitleComponent = () => {
  return (
    <h1 className="head" tabIndex="5">
      Namaste React Using JSX
    </h1>
  );
};

//Functional Component
//1.  a function return some peace of jsx code it's functional component
//2. a function which return react element

const number = 1000;

const HeadingComponent1 = () => {
  return (
    <div className="container">
      {TitleComponent()}
      <TitleComponent />
      <TitleComponent></TitleComponent>
      <h1 className="heading">Namaste React Functional Component🚀</h1>
    </div>
  );
};

//React-Fragment - behave like an empty tag
// JSX don't allowed multiple root element in we can have only one root element and inside that whatever

const HeadingComponent = () => {
  return (
    // <React.Fragment>
    <>
      <div className="container">
        <TitleComponent />
        <h1 className="heading">Namaste React Functional Component🚀</h1>
      </div>
      <div id="conteriner2"></div>
    </>
    // </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
