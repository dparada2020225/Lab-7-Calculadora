import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useCalculator } from '../hooks/useCalculator'

describe('useCalculator', () => {
  it('muestra 0 al iniciar', () => {
    const { result } = renderHook(() => useCalculator())
    expect(result.current.display).toBe('0')
  })

  it('concatena numeros correctamente', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.handleNumber('4') })
    act(() => { result.current.handleNumber('2') })
    expect(result.current.display).toBe('42')
  })

  it('suma dos numeros correctamente', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.handleNumber('5') })
    act(() => { result.current.handleOperation('+') })
    act(() => { result.current.handleNumber('3') })
    act(() => { result.current.handleEquals() })
    expect(result.current.display).toBe('8')
  })

  it('muestra ERROR si resultado es negativo', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.handleNumber('3') })
    act(() => { result.current.handleOperation('-') })
    act(() => { result.current.handleNumber('9') })
    act(() => { result.current.handleEquals() })
    expect(result.current.display).toBe('ERROR')
  })

  it('muestra ERROR si resultado supera 999999999', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.handleNumber('9') })
    act(() => { result.current.handleNumber('9') })
    act(() => { result.current.handleNumber('9') })
    act(() => { result.current.handleNumber('9') })
    act(() => { result.current.handleNumber('9') })
    act(() => { result.current.handleNumber('9') })
    act(() => { result.current.handleNumber('9') })
    act(() => { result.current.handleNumber('9') })
    act(() => { result.current.handleNumber('9') })
    act(() => { result.current.handleOperation('*') })
    act(() => { result.current.handleNumber('2') })
    act(() => { result.current.handleEquals() })
    expect(result.current.display).toBe('ERROR')
  })

  it('no acepta mas de 9 digitos', () => {
    const { result } = renderHook(() => useCalculator())
    for (let i = 0; i < 12; i++) {
      act(() => { result.current.handleNumber('1') })
    }
    expect(result.current.display.length).toBeLessThanOrEqual(9)
  })

  it('limpia el display con C', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.handleNumber('5') })
    act(() => { result.current.handleClear() })
    expect(result.current.display).toBe('0')
  })

  it('toggle de signo funciona', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.handleNumber('5') })
    act(() => { result.current.handleToggleSign() })
    expect(result.current.display).toBe('-5')
  })

  it('division con resultado decimal truncado a 9 chars', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.handleNumber('2') })
    act(() => { result.current.handleNumber('2') })
    act(() => { result.current.handleOperation('/') })
    act(() => { result.current.handleNumber('7') })
    act(() => { result.current.handleEquals() })
    expect(result.current.display.length).toBeLessThanOrEqual(9)
  })

  it('operacion encadenada muestra resultado intermedio', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.handleNumber('4') })
    act(() => { result.current.handleOperation('+') })
    act(() => { result.current.handleNumber('3') })
    act(() => { result.current.handleOperation('+') })
    expect(result.current.display).toBe('7')
  })
})