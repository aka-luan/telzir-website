import { Form } from '.'
import { screen, render } from '../../tests/index'

describe('Form', () => {

  
  // 1. O form deve começar aberto
  test('The form should start open', () => {
    render(<Form/>)
    
    expect(screen.getByText('Minutos da ligação')).toBeInTheDocument()
  })
  // 2. O botão de calcular deve começar aberto
  test('The Button should start open', () => {
    render(<Form/>)
    
    expect(screen.getByText('Calcular tarifas')).toBeInTheDocument()
  })

})