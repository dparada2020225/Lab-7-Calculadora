import Button from './Button'
import { useCalculator } from '../hooks/useCalculator'
import { keys } from '../constants/keys'
import { getHandler } from '../utils/getHandler'

type Props = { calc: ReturnType<typeof useCalculator> }

const Keypad = ({ calc }: Props) => (
  <div className="keypad">
    {keys.map(({ label, variant }) => (
      <Button key={label} label={label} variant={variant} onClick={getHandler(label, calc)} />
    ))}
  </div>
)

export default Keypad