import { Form } from '../Form'
import { Container } from './styles'

export function Dashboard() {
  return (
    <Container>
      <div className="left-container">
        <h1>Com o FaleMais você fala de graça!</h1>
        <p>Com o novo produto FaleMais da Telzir você pode falar de graça até
          um determinado tempo (em minutos) e só paga os minutos excedentes.
          Calcule o preço das ligações no formulário ao lado.</p>
        {/* <p>Escolha o código das cidade de origem e destino, informe o tempo da ligação e selecione qual o
          plano FaleMais.</p> */}
        <div className="buttons-container">
          <button>Assine agora</button>
          <button>Ver vantagens</button>
        </div>
      </div>
      <div className="center-column"></div>
      <div className="right-container">
        <Form />
      </div>
    </Container>
  )
}