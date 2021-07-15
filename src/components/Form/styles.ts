import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--purple);
  margin-left: 2.5rem;  
  position: relative;
  padding: 0rem 3rem;
  margin-top: 1.5rem;  

  form {
    transition: visibility 1s, opacity 1s, left 1s ease-out;
    height: 32.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .form-header {
    text-align  : center;
    font-weight: 500;
    top: -1.5rem;
    left: 1.5rem;
    position: absolute;
    background-color: var(--yellow);
    width: 8rem;
    height: 3rem;

    p {
      font-size: 0.9rem;
    }
  }

  .tarifas-container {
    width: 80%;
    display: flex;
    flex-direction: row-reverse;
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    transition: all 1s;

    div {
      width: 15rem;
      height: 12.5rem;
      align-items: center;
      display: flex;
      flex-direction: column;
      margin: 1rem;
      background-color: var(--yellow);

      span {
        font-weight: 500;
        padding-top: 2rem;

        &:last-child {
          max-width: 100%;
          overflow: hidden;
          text-align: center;
          font-size: 2rem;
        }
      }
      
      &:first-child {
        color: var(--buttonText);
        background-color: var(--black);
      }
    }
  }

  .v-line { 
    top: 1rem ;
    right: -1rem;
    position: absolute;

    img {
      transform: rotate(3deg);
      float: right;
      width: 2.65rem;       
    }    
  }
  .h-line {
    top: 16rem;
    right: 4rem;
    position: absolute;

    img {
      transform: rotate(-89deg);
      width: 27.4rem;
    }    
  }

  label {
    font-size: 1rem;
    
    &:first-child {
      margin-top: 3rem;
    }
  }

  input, select {
    z-index: 1;
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
    z-index: 1;
    position: absolute;
    bottom: 0;
    right: 3rem;
    height: 4rem;
    width: 10rem;
    background: var(--black);
    color: var(--buttonText);
  }

  .img-container {
      z-index: 1;
      background-color: var(--yellow);
      height: 23rem;
      width: 20rem;
      top: 24rem;
      position: absolute;
      left: -12.5rem;

      img {
        width: 100%;
        height: 100%;
      }
    }
`