import { useCalculator } from '../hooks/useCalculator'

type Calc = ReturnType<typeof useCalculator>
type Op = '+' | '-' | '*' | '/' | '%'

const OPS = ['+', '-', '*', '/', '%']

export const getHandler = (label: string, calc: Calc): (() => void) => {
  if (label === 'C') return calc.handleClear
  if (label === '+/-') return calc.handleToggleSign
  if (label === '=') return calc.handleEquals
  if (label === '.') return calc.handleDecimal
  if (OPS.includes(label)) return () => calc.handleOperation(label as Op)
  return () => calc.handleNumber(label)
}