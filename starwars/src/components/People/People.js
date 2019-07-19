import React from "react";
import { List, Segment } from "semantic-ui-react";

const People = ({ characters }) => {
  // console.log(characters);
  // return <div>Test2</div>;
  return characters.map((character, idx) => {
    return (
      <>
        <Segment>
          <List>
            <List.Item>
              <List.Header>{character.name}</List.Header>
            </List.Item>
            <List.Item>Gender: {character.gender}</List.Item>
            <List.Item>Birth Year: {character.birth_year}</List.Item>
            <List.Item>Height: {character.height}cm</List.Item>
            <List.Item>Mass: {character.mass}</List.Item>
          </List>
        </Segment>
      </>
    );
  });
};

export default People;
