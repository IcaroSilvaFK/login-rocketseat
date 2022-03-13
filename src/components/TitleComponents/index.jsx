import React from "react";

import { ReactComponent as SvgIco } from "../../assets/logo.svg";

import { Container } from "./styles";

export function TitleComponent() {
  return (
    <Container>
      <SvgIco />
      <div>
        <h1>Faça seu login na plataforma</h1>
      </div>
    </Container>
  );
}
