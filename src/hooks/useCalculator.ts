import { useState } from 'react'

const MAX_DIGITS = 9
const MAX_VALUE = 999999999

type Operation = '+' | '-' | '*' | '/' | '%' | null

const truncate = (num: number): string => {
  const str = num.toString()
  if (str.includes('.')) {
    return str.slice(0, MAX_DIGITS)
  }
  return str
}

const validate = (num: number): string => {
  if (num < 0) return 'ERROR'
  if (num > MAX_VALUE) return 'ERROR'
  return truncate(num)
}

export const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [prev, setPrev] = useState<number | null>(null)
  const [op, setOp] = useState<Operation>(null)
  const [waitingForNext, setWaitingForNext] = useState(false)

  const handleNumber = (digit: string) => {
    if (waitingForNext) {
      setDisplay(digit)
      setWaitingForNext(false)
      return
    }
    if (display === 'ERROR') return
    if (display.replace('.', '').replace('-', '').length >= MAX_DIGITS) return
    if (digit === '.' && display.includes('.')) return
    setDisplay(display === '0' ? digit : display + digit)
  }

  const handleDecimal = () => handleNumber('.')

  const compute = (a: number, b: number, operation: Operation): string => {
    let result: number
    if (operation === '+') result = a + b
    else if (operation === '-') result = a - b
    else if (operation === '*') result = a * b
    else if (operation === '/') result = b === 0 ? -1 : a / b
    else if (operation === '%') result = a % b
    else return display
    return validate(result)
  }

  const handleOperation = (nextOp: Operation) => {
    if (display === 'ERROR') return
    const current = parseFloat(display)
    if (prev !== null && op && !waitingForNext) {
      const result = compute(prev, current, op)
      setDisplay(result)
      setPrev(result === 'ERROR' ? null : parseFloat(result))
    } else {
      setPrev(current)
    }
    setOp(nextOp)
    setWaitingForNext(true)
  }

  const handleEquals = () => {
    if (prev === null || op === null || display === 'ERROR') return
    const result = compute(prev, parseFloat(display), op)
    setDisplay(result)
    setPrev(null)
    setOp(null)
    setWaitingForNext(true)
  }

  const handleToggleSign = () => {
    if (display === 'ERROR' || display === '0') return
    if (display.startsWith('-')) {
      setDisplay(display.slice(1))
    } else {
      if ((display + '').length >= MAX_DIGITS) return
      setDisplay('-' + display)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setPrev(null)
    setOp(null)
    setWaitingForNext(false)
  }

  return {
    display,
    handleNumber,
    handleDecimal,
    handleOperation,
    handleEquals,
    handleToggleSign,
    handleClear,
  }
}