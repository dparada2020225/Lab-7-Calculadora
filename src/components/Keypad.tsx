import Button from './Button'
import { useCalculator } from '../hooks/useCalculator'

type Props = { calc: ReturnType<typeof useCalculator> }

const keys = [
  { label: 'C', variant: 'clear' as const },
  { label: '+/-', variant: 'op' as const },
  { label: '%', variant: 'op' as const },
  { label: '/', variant: 'op' as const },
  { label: '7', variant: 'number' as const },
  { label: '8', variant: 'number' as const },
  { label: '9', variant: 'number' as const },
  { label: '*', variant: 'op' as const },
  { label: '4', variant: 'number' as const },
  { label: '5', variant: 'number' as const },
  { label: '6', variant: 'number' as const },
  { label: '-', variant: 'op' as const },
  { label: '1', variant: 'number' as const },
  { label: '2', variant: 'number' as const },
  { label: '3', variant: 'number' as const },
  { label: '+', variant: 'op' as const },
  { label: '0', variant: 'number' as const },
  { label: '.', variant: 'number' as const },
  { label: '=', variant: 'equal' as const },
]

const getHandler = (label: string, calc: Props['calc']) => {
  if (label === 'C') return calc.handleClear
  if (label === '+/-') return calc.handleToggleSign
  if (label === '=') return calc.handleEquals
  if (label === '.') return calc.handleDecimal
  if (['+', '-', '*', '/', '%'].includes(label)) return () => calc.handleOperation(label as never)
  return () => calc.handleNumber(label)
}

const Keypad = ({ calc }: Props) => (
  <div className="keypad">
    {keys.map(({ label, variant }) => (
      <Button key={label} label={label} variant={variant} onClick={getHandler(label, calc)} />
    ))}
  </div>
)

export default Keypad