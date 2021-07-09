import { Container } from './styles'
import logoImg from '../../assets/logo.png'
export function Header() {
  return (

    <Container>
      <img src={logoImg} alt="Tezir Logo" />
      <ul>
        <li>FaleMais</li>
        <li>Soluções</li>
        <li>Sobre nós</li>
        <li>Preços</li>
      </ul>
    </Container>

  )
}