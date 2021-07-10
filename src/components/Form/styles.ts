import styled from "styled-components";

export const NewForm = styled.form`
  background-color: var(--purple);
  margin-left: 2.5rem;  
  height: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0rem 3rem;
  margin-top: 1.5rem;

  div {
    text-align  : center;
    font-size: 0.9rem;
    top: -1.5rem;
    left: 1.5rem;
    position: absolute;
    background-color: var(--yellow);
    width: 8rem;
    height: 3rem;
  }

  label {
    font-size: 0.9rem;
    
    &:first-child {
      margin-top: 3rem;
    }
  }

  input, select {
    font-size: 0.9rem;
    padding: 0.5rem 0.5rem;
    
    &:focus {
      outline: none;
    }
  }
  
  input, select, button {
    margin-bottom : 1rem;
    border: none;
    background-color: #c8a5e3;
  }

  button {
    margin-top: 2rem;
    align-self: flex-end;
    height: 4rem;
    width: 10rem;
    background: var(--black);
    color: var(--buttonText);
  }      
`