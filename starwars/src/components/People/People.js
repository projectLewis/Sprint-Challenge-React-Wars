import React from "react";

const People = ({ characters }) => {
  // console.log(characters);
  // return <div>Test2</div>;
  return characters.map((character, idx) => {
    return (
      <div id={idx} style={{ height: "30px", border: "3px solid blue" }}>
        {character.name}
      </div>
    );
  });
};

export default People;
