import styled from 'styled-components'

export const Container = styled.header`
  margin: 0 auto;
  height: 5rem;
  display: flex;
  max-width: 1700px;
  position: relative;

  .nav-logo {
    display: flex;

    img {
    margin: 1rem 1rem;
  }
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
      font-weight: 400;
      margin: 0 2rem;
      text-decoration: none;   
    }
  }

`

