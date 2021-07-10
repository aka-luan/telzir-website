import { Container } from './styles'
import logoImg from '../../assets/logo.png'
export function Header() {
  return (

    <Container>
      <div className="nav-logo">
        <img src={logoImg} alt="Tezir Logo" />
        <span>Telzir</span>
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

    </Container>

  )
}