import React from "react";
import People from "../People/People";
import { Container, Header, Icon } from "semantic-ui-react";

const myStyle = {
  width: "900px",
  opacity: "0.7",
  // marginBottom: "20px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr",
  gridTemplateAreas: '". . ." ". . ." ". . ."',
  gridGap: "0px 30px"
};

const PeopleWrapper = ({ characters }) => {
  console.log(characters);
  return (
    <div>
      <Header as="h1" icon textAlign="center">
        <Icon name="space shuttle" inverted color={"red"} circular />
      </Header>
      <Container style={myStyle} fluid>
        <People characters={characters} />
      </Container>
    </div>
  );
};

export default PeopleWrapper;
