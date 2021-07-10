import React, { SyntheticEvent } from 'react'
import { NewForm } from './styles'
import { constants } from '../../utils/constants'
import { MyState } from '../../utils/interfaces'


export class Form extends React.Component<{},  MyState >{
  constructor(props: any) {
    super(props) 

    this.state = {
      origem: "011",
      destino: "016",
      minutos: "00",
      plano: "30",
      tarifaFaleMais: "0",
      tarifaPadrao: "0"
    }
  }

  handleInputChange = (event: { target: { name: any, value: any } }) => {
    const name = (event.target as HTMLInputElement).name
    const value = (event.target as HTMLInputElement).value
    const newState = { [name]: value } 

    this.setState(newState as Pick<MyState, keyof MyState>)    
  }


  handleSubmit = (event: SyntheticEvent) => {
    const origem = this.state.origem
    const destino = this.state.destino
    const tipoTarifa = `TARIFA${origem}_${destino}`    
    const tarifa = constants.tarifas[tipoTarifa]
    const minutos = parseInt(this.state.minutos)
    const plano = parseInt(this.state.plano)

    this.setState({
      tarifaPadrao: ((minutos * tarifa)).toFixed(2).toString(),
      tarifaFaleMais: parseInt(this.state.tarifaFaleMais) < 0?  '0' : ((((minutos - plano) * tarifa) * 1.1)).toFixed(2).toString()
    })

    event.preventDefault()
  }

  render() {
    return (
      <NewForm onSubmit={this.handleSubmit}>
        
        <label htmlFor="codOrigem">Código de origem</label>
        <select name="origem" id="codOrigem" value={this.state.origem} onChange={this.handleInputChange}>
          <option value="011">011</option>
          <option value="016">016</option>
          <option value="017">017</option>
          <option value="018">018</option>
        </select>
        <label htmlFor="codDestino">Código de destino</label>
        <select name="destino" id="codDestino" value={this.state.destino} onChange={this.handleInputChange}>
          <option value="011">011</option>
          <option value="016">016</option>
          <option value="017">017</option>
          <option value="018">018</option>
        </select>
        <label htmlFor="tempo">Minutos da ligação</label>
        <input type="text" id="tempo" name="minutos" placeholder="Ex: 30, 40, 100..." onChange={this.handleInputChange}/>
        <label htmlFor="tipoPlano">Plano FaleMais</label>
        <select name="plano" id="tipoPlano" value={this.state.plano} onChange={this.handleInputChange}>
          <option value="30"  >FaleMais 30</option>
          <option value="60">FaleMais 60</option>
          <option value="120">FaleMais 120</option>
        </select>
        <button type="submit">Calcular</button>
        <div>Calcule o custo das ligações</div>
      </NewForm>
    )
  }
}