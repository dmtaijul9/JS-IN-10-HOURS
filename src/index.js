import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const list = [
  { id: 1, name: "Tanmoy", age: 22, description: "This is a description " },
  {
    id: 2,
    name: "Jamatul",
    age: 25,
    description: "this is second description . ",
  },
  {
    id: 3,
    name: "Shahrin",
    age: 20,
    description: "This is third description ",
  },
];

const BookList = () => {
  return (
    <div className="booklist">
      {list.map((person) => {
        return <Book key={person.id} {...person} />;
      })}
    </div>
  );
};

const Book = (props) => {
  console.log(props);
  const { name, age, description } = props;
  return (
    <section className="book">
      <h1> Name: {name} </h1>
      <br />
      <h2> Age: {age} </h2>
      <br />
      <h3> Description: {description} </h3>
    </section>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
