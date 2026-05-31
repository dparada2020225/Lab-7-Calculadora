import Display from './Display'
import Keypad from './Keypad'
import { useCalculator } from '../hooks/useCalculator'

const Calculator = () => {
  const calc = useCalculator()
  return (
    <div className="calculator">
      <Display value={calc.display} />
      <Keypad calc={calc} />
    </div>
  )
}

export default Calculator