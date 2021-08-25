import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const BookList = () => {
  return (
    <div className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
};

const Book = () => {
  return (
    <section className="book">
      {" "}
      <Image /> <Title />
    </section>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/71eOa2PywHL._AC_SY450_.jpg"
      alt="Cat"
      style={{ marginLeft: "20px" }}
    />
  );
};

const Title = () => {
  return <div>abbitgoo Cat Harness and Leash for Walking</div>;
};
ReactDOM.render(<BookList />, document.getElementById("root"));
