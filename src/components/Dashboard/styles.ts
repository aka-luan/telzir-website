import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1600px;
  display: flex;
  margin-top: 4rem;

  .form-toggle {
    visibility: hidden;
  }

  .left-container {
    transition: visibility 1s, opacity 1s, right 1s ;
    width: 70%;
    padding-left: 5rem;
    display: flex;
    flex-direction: column;
    position: relative;

    h1 {
      font-weight: 500;
      font-size: 4.25rem;
      line-height: 1.25;      
    }

    p {
      max-width: 22.5rem;
      line-height: 1.75;
    }

    .buttons-container {
      display: flex;
      
      button {
        height: 4rem;
        width: 10rem;
        background: var(--black);
        color: var(--buttonText);
        border: none;

        @media (max-width: 880px) {
          height: 5rem;
        }
      }      

      button:last-child {
        margin-left: 1rem;
        background: none;
        color: var(--black);
      }
    }
    
    h1, p, button {
      margin: 2rem 0;
    }
  }

  .center-column {
    width: 5rem;
    background-color: black;
    margin-left: 5rem;
    position: relative;
  }

  .right-container {
    
    width: 70%;
  }

  /* media queries */

  @media (max-width: 540px) {
    flex-direction: column;

    .form-toggle {
      visibility: visible;
      margin: 1rem;
      cursor: pointer;
      height: 5rem;
      
      div {
        transition: all 1s ease-out;
        padding: 1rem;
        background-color: var(--yellow);
        color: var(--black);
        text-align: center;
        width: 8rem;
        font-weight: 500;
        float: right;
        font-size: 1.25rem;
      }
    }

    .left-container {
      
      place-self: center;
      text-align: center;
      padding-left: 0;
      margin-left: 0;

      p {
        font-size: 1.25rem;
        place-self: center;
        max-width: 40rem;
      }

      .buttons-container {
        justify-content: center;
      }
    }

    .right-container {      
      transition: all 1s ease-in-out;
      position: absolute;
      place-self: center;
      margin-top: 7rem;
      visibility: hidden;
      opacity: 0;

      .img-container {
        display: none;
      }

      div {
        margin-left: 0;
      }
    }

    .center-column {
      width: 100% ;
      height: 1rem;
      margin-left: 0;
    }

    .tarifas-container {
      width: auto;
    }
  }
  @media (max-width: 540px) {

    .left-container {
      width: 100%;

    }
    
    .right-container {
      width: 90%;
    }

    .tarifas-container {
      width: 80%;
    }
  }
`