import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  display: flex;
  margin-top: 4rem;

  .left-container {
    width: 70%;
    padding-left: 5rem;


    h1 {
      font-weight: 500;
      font-size: 4.25rem;
      word-spacing: 0%;
      line-height: 1.25;
      
    }

    p {
      max-width: 22.5rem;
      line-height: 1.75;
    }

    .buttons-container {
      button {
        height: 4rem;
        width: 10rem;
        background: var(--black);
        color: var(--buttonText);
        border: none;
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
  }

  .right-container {
    width: 70%;
  }
`