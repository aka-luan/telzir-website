import React from 'react'
import { DashboardState } from '../../utils/interfaces'
import { Form } from '../Form'
import { Container } from './styles'

export class Dashboard extends React.Component<{}, DashboardState> {
  constructor (props: any) {
    super(props)

    this.state = {
      leftStyles: {
        visibility: 'visible',
        opacity: 1,
        right: '0'
      },
      rightStyles: {
      },

      isForm: false
    }
  }

  handleClick = () => {

    if(!this.state.isForm) {
      this.setState({
        leftStyles: {
          visibility: 'hidden',
          opacity: 0,
          right: '10rem'
        },
        rightStyles: {        
          opacity: 1,
          visibility: 'visible',
        },

        isForm: !this.state.isForm
      })
    } else {
      this.setState({
        leftStyles: {
          visibility: 'visible',
          opacity: 1,
          right: '0'
        },
        rightStyles: {        
          opacity: 0,
          visibility: 'hidden',
        },
        isForm: !this.state.isForm
      })
    }

    
  }

  render() {
    return (
      <Container>
        <div className="form-toggle" >
          <div onClick={this.handleClick}>{this.state.isForm? 'Voltar' : 'Calcular'}</div>
        </div>
        <div className="left-container" style={this.state.leftStyles}>
          <h1>Com o FaleMais você fala de graça!</h1>
          <p>Com o novo produto FaleMais da Telzir você pode falar de graça até
            um determinado tempo (em minutos) e só paga os minutos excedentes.
            Calcule o preço das ligações no formulário.</p>
          {/* <p>Escolha o código das cidade de origem e destino, informe o tempo da ligação e selecione qual o
            plano FaleMais.</p> */}
          <div className="buttons-container">
            <button>Assine agora</button>
            <button>Ver vantagens</button>
          </div>
        </div>
        <div className="center-column"></div>
        <div className="right-container" style={this.state.rightStyles}>
          <Form />
        </div>
      </Container>
    )
  }  
}