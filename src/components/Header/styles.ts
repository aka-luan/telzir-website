import styled from 'styled-components'

export const Container = styled.header`
  margin: 0 auto;
  height: 5rem;
  display: flex;  
  max-width: 1700px;
  position: relative;
  width: 100%;

  .nav-logo {
    display: flex;
    height: 4rem;
    width: 90%;
  }
  
  .nav-menu-items {
    position: absolute;
    bottom: 0px;
    right: 0px;
    display: flex;
    list-style-type: none;

    li {
      float: right;
      transition: all 0.75 ease-out;

      &:hover {
        background-color: var(--black);
        transition: background-color 0.75s ease-out;

        a {
          color: var(--buttonText);
          transition: all 1s;
        }
      }
    }
    
    a {
      text-align: center;
      line-height: 3rem;
      color: var(--black);
      font-weight: 500;
      margin: 0 2rem;
      text-decoration: none;   
    }
  }

  /* media queries*/

  @media(max-width: 540px) {
    justify-content: space-between;

    .nav-logo {
      width: 0;
      margin: 10px;
    }
    
    .nav-menu-items {
      display: none;
    }

    .one,
    .two,
    .three {
      background-color: var(--black);
      height: 5px;
      width: 100%;
      margin: 6px auto;
      
      transition-duration: 0.3s;
    }

    .menu-toggle {
      width: 40px;
      height: 30px;
      margin-right: 20px;
      margin-top: 20px;
    }

    /* FullScreen */
    .nav-menu-container.on{
      position: absolute;
      top: 0;
      left: 0;

      width: 100vw;
      height: 100vh;

      background-color: var(--yellow);

      z-index: 10;

      display: flex;
      justify-content: center;
      align-items: center;
      .menu-toggle {
        position: absolute;
        right: 0;
        top: 0;

        .one {
          transform: rotate(45deg) translate(7px, 7px);
        }
        .two {
          opacity: 0;
        }
        .three {
          transform: rotate(-45deg) translate(8px, -9px);
        }
      }

      ul {
        position: relative;
        display: grid;
        text-align: center;

        a {
            transition-duration: 0.5s;
            font-size: 3rem;
            line-height: 7rem;
        }
      }
    }

  }

`

