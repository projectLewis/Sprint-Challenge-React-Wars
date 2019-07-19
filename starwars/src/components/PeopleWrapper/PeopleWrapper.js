import React from "react";
import People from "../People/People";
import { Header, Icon } from "semantic-ui-react";

const PeopleWrapper = ({ characters }) => {
  console.log(characters);
  return (
    <div>
      <Header as="h1" icon textAlign="center">
        <Icon name="space shuttle" inverted color={"red"} circular />
        <Header.Content>Star Wars Top 10</Header.Content>
      </Header>
      <People characters={characters} />
    </div>
  );
};

export default PeopleWrapper;
