import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    color: #8252da;

    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
  button {
    padding: 14px;

    background-color: #8252da;

    color: #fff;

    font-weight: bold;

    border: none;

    border-radius: 5px;
    cursor: pointer;

    font-size: 18px;
    letter-spacing: 1px;

    margin-top: 14px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.2);
    }
  }

  p {
    color: #eee;

    font-size: 14px;

    span {
      font-weight: bold;
    }
    margin: 10px auto;
  }
`;

export const Box = styled.div`
  background-color: #e8f0fe;

  height: 45px;
  width: 340px;

  display: flex;
  align-items: center;

  padding: 0 10px;

  border-radius: 2px;

  input {
    border: none;
    background-color: inherit;
    outline: none;
    padding: 10px;
    flex-grow: 1;
  }
`;

export const BoxSeparator = styled.div`
  display: flex;
  gap: 30px;
`;

export const Seprator = styled.div`
  height: 0.09px;
  width: 150px;

  background-color: #2d3748;

  border-radius: 10px;
`;

export const ButtonGithub = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: #eddd;
    font-size: 16px;
    font-weight: 300;
  }
  button {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 15px 60px;

    display: flex;
    gap: 10px;
    align-items: center;

    text-transform: uppercase;
    font-size: 17px;
    svg {
      color: #8252da;
    }

    &:hover {
      background-color: #8252da;
      filter: brightness(1.1);

      svg {
        color: #fff;
      }
    }
  }
`;
