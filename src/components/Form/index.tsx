import React, { SyntheticEvent } from 'react'
import { Container } from './styles'
import { constants } from '../../utils/constants'
import { FormState } from '../../utils/interfaces'
import vLine from '../../assets/round line.svg'
import hLine from '../../assets/round line2.svg'
import womanImg from '../../assets/woman.png'


export class Form extends React.Component<{}, FormState> {
  constructor(props: any) {
    super(props)

    this.state = {
      formData: {
        origem: '011',
        destino: '016',
        minutos: '0',
        plano: '30',
        tarifaFaleMais: '0',
        tarifaPadrao: '0'
      },
      formStyles: {
        opacity: 1,
        left: '0'
      },
      tarifaStyles: {
        visibility: 'hidden',
        opacity: 0,
        left: '40%'
      },
      isForm: true
    }
  }

  

  handleInputChange = (event: { target: { name: any, value: any } }) => {
    const name = (event.target as HTMLInputElement).name
    const value = (event.target as HTMLInputElement).value
    let newState = this.state.formData
    newState[name] = value
    this.setState({ formData: newState })
  }


  handleSubmit = (event: SyntheticEvent) => {
    console.log(parseInt(this.state.formData.minutos))
    if (parseInt(this.state.formData.minutos) < 0){      
      alert('Insira um valor positivo')      
      event.preventDefault()      
      return 
    } else if (isNaN(parseInt(this.state.formData.minutos))) {
      alert('Insira um valor válido')
      event.preventDefault()
      return
    } else if (this.state.isForm) {
      this.setState({ isForm: !this.state.isForm })
    } else {
      this.setState({
        formStyles: {
          visibility: 'visible',
          opacity: 1,
          left: '0'
        },
        tarifaStyles: {
          visibility: 'hidden',
          opacity: 0,
          left: '40%'
        },
        isForm: !this.state.isForm
      })
      event.preventDefault()
      return
    }

    const origem = this.state.formData.origem
    const destino = this.state.formData.destino
    const tipoTarifa = `TARIFA${origem}_${destino}`
    const tarifa = constants.tarifas[tipoTarifa]
    const minutos = parseInt(this.state.formData.minutos)
    const plano = parseInt(this.state.formData.plano)

    let newState = this.state.formData
    newState.tarifaPadrao = ((minutos * tarifa)).toFixed(2).toString()
    newState.tarifaFaleMais = Math.max(0, ((((minutos - plano) * tarifa) * 1.1))).toFixed(2).toString()

    if (isNaN(parseInt(newState.tarifaPadrao))) {
      console.log(newState)
      newState.tarifaPadrao = '-'
      newState.tarifaFaleMais = '-'
    }    

    this.setState({
      formData: newState,
      formStyles: {
        visibility: 'hidden',
        opacity: 0,
        left: '3rem'
      },
      tarifaStyles: {
        visibility: 'visible',
        opacity: 1,
        left: '50%'
      }
    })

    event.preventDefault()
  }

  render() {
    return (
      <Container>
        <form id="tarifa-form" onSubmit={this.handleSubmit} style={this.state.formStyles} >
          <label htmlFor="codOrigem">Código de origem</label>
          <select name="origem" id="codOrigem" value={this.state.formData.origem} onChange={this.handleInputChange}>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
          </select>
          <label htmlFor="codDestino">Código de destino</label>
          <select name="destino" id="codDestino" value={this.state.formData.destino} onChange={this.handleInputChange}>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
          </select>
          <label htmlFor="tempo">Minutos da ligação</label>
          <input type="text" id="tempo" name="minutos" placeholder="Ex: 30, 40, 100..." onChange={this.handleInputChange} />
          <label htmlFor="tipoPlano">Plano FaleMais</label>
          <select name="plano" id="tipoPlano" value={this.state.formData.plano} onChange={this.handleInputChange}>
            <option value="30"  >FaleMais 30</option>
            <option value="60">FaleMais 60</option>
            <option value="120">FaleMais 120</option>
          </select>
        </form>
        <div className="tarifas-container" style={this.state.tarifaStyles}>
          <div className="tarifaPadrao">
            <span>Sem FaleMais</span>
            <span>${this.state.formData.tarifaPadrao}</span>
          </div>
          <div className="tarifaFaleMais">
            <span>Com FaleMais</span>
            <span>${this.state.formData.tarifaFaleMais}</span>
          </div>
        </div>        
        <div className="img-container">
          <img src={womanImg} alt="Mulher falando ao telefone" />
        </div>
        <button type="submit" form="tarifa-form">{this.state.isForm ? 'Calcular tarifas' : 'Voltar'}</button>
        <div className="form-header"><p>Calcule o custo das ligações</p></div>
        <div className="v-line"><img src={vLine} alt="" /></div>
        <div className="h-line"><img src={hLine} alt="" /></div>
      </Container>
    )
  }
}