import styled from "styled-components";

export const AppWrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-self: baseline;
  align-items: center;
  background-color: #ddd;
  & a {
    text-decoration: none;
    color: #000;
    font-weight: 600;
  }
  & img {
    border-radius: 5px;
  }
  & {
    input {
      margin-top: 10px;
    }
  }
`;

export const CharacterElement = styled.div`
  min-width: 300px;
  margin: 10px 10px;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  background-color: #eeeded;
`;

export const Paggination = styled.div`
  min-width: 300px;
  margin: 10px 10px;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  overflow: hidden;
  & button {
    width: 95px;
  }
`;
