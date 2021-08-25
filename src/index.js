import React from "react";
import ReactDOM from "react-dom";

const BookList = () => {
  return (
    <div>
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
    <section>
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
    />
  );
};

const Title = () => {
  return (
    <div>
      abbitgoo Cat Harness and Leash for Walking, Escape Proof Soft Adjustable
      Vest Harnesses for Cats, Easy Control Breathable
    </div>
  );
};
ReactDOM.render(<BookList />, document.getElementById("root"));
