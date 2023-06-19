import React from 'react';

const Book = (props) => {
    console.log("props");
  return (
    <div> First-Name: {props.name} 
     <br />  Last-Name: {props.lastName}
     <br /> Hobbies:{props.hobbies} </div>
  );
};

Book.defaultProps = {
    hobbies:"Football",
};
export default Book;