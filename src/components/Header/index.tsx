import { Container } from './styles'
import logoImg from '../../assets/logo.png'

export function Header() {  
  

  window.addEventListener('load', () => {
    let show = true;
    const menuContainer = document.querySelector('.nav-menu-container') as Element
    const menuToggle = document.querySelector('.menu-toggle') as Element

  menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContainer?.classList.toggle('on', show)

    show = !show
  })
  })

  

  return (
    <Container>
      <div className="nav-logo">
        <img src={logoImg} alt="Tezir Logo" />
      </div>
      <div className="nav-menu-container">
        <div className="menu-toggle">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <ul className="nav-menu-items">
          <li>
            <a href="/">FaleMais</a>
          </li>
          <li>
            <a href="/">Soluções</a>
          </li>
          <li>
            <a href="/">Sobre Nós</a>
          </li>
          <li>
            <a href="/">Contatos</a>
          </li>
          <li>
            <a href="/">Preços</a>
          </li>
        </ul>
      </div>
    </Container>

  )
}