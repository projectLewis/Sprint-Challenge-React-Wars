import React from "react";
import People from "../People/People";

const PeopleWrapper = ({ characters }) => {
  console.log(characters);
  return (
    <div>
      Test1
      <People characters={characters} />
    </div>
  );
};

export default PeopleWrapper;
