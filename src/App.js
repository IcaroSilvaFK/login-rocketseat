import React from "react";

import { TitleComponent } from "./components/TitleComponents";

import { Container, BoxOne, BoxTwo } from "./styles/styles.home";
import { FormComponent } from "./components/FormComponent";

function App() {
  return (
    <Container>
      <BoxOne>
        <TitleComponent />
      </BoxOne>
      <BoxTwo>
        <FormComponent />
      </BoxTwo>
    </Container>
  );
}

export default App;
