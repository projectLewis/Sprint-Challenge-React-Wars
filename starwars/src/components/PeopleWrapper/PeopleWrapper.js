import React from "react";
import People from "../People/People";
import { Container, Header, Icon } from "semantic-ui-react";

const PeopleWrapper = ({ characters }) => {
  console.log(characters);
  return (
    <div>
      <Header as="h1" icon textAlign="center">
        <Icon name="space shuttle" inverted color={"red"} circular />
        <Header.Content>Star Wars Top 10</Header.Content>
      </Header>
      <Container
        style={{ width: "300px", opacity: "0.7", marginBottom: "20px" }}
        fluid
      >
        <People characters={characters} />
      </Container>
    </div>
  );
};

export default PeopleWrapper;
