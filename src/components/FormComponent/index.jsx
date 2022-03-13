import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { useForm } from "react-hook-form";

import { Box, Container, BoxSeparator, Seprator, ButtonGithub } from "./styles";

export function FormComponent() {
  const [text, setText] = useState("password");
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  function handleSetTypeInput() {
    if (text === "password") setText("text");
    if (text === "text") setText("password");
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <MdEmail size={18} />
        <input type="email" {...register("email")} />
      </Box>
      <Box>
        <RiLockPasswordFill size={18} />
        <input type={text} {...register("password")} />
        {text === "password" ? (
          <AiFillEye size={15} onClick={handleSetTypeInput} color="#8252da" />
        ) : (
          <AiFillEyeInvisible
            size={15}
            onClick={handleSetTypeInput}
            color="#8252da"
          />
        )}
      </Box>
      <span>Esqueci minha senha</span>

      <button type="submit">Entrar</button>

      <p>
        Não tem conta? <span>Registre-se</span>
      </p>
      <BoxSeparator>
        <Seprator />
        <Seprator />
      </BoxSeparator>
      <ButtonGithub>
        <span>Ou entre com</span>
        <button>
          <BsGithub />
          github
        </button>
      </ButtonGithub>
    </Container>
  );
}
