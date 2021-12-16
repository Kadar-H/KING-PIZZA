import React from "react";
import { MySelectionContainer, H1, Input, Label, Button } from "./NewElements";

const New = () => {
  return (
    <>
      <MySelectionContainer>
        <H1>What's your focus of Gina Inc?</H1>
        <Input type="checkbox" id="condos" name="Condos"></Input>
        <Label for="Condos">Condos</Label>
        <Input type="checkbox" id="condos" name="Condos"></Input>
        <Label for="Condos">Condos</Label>
        <Input type="checkbox" id="condos" name="Condos"></Input>
        <Label for="Condos">Condos</Label>
        <Button>Previous Question</Button>
        <Button>Next Question</Button>
      </MySelectionContainer>
    </>
  );
};

export default New;
