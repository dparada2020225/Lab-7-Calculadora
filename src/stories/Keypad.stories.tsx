import type { Meta, StoryObj } from '@storybook/react-vite'
import Keypad from '../components/Keypad'
import { useCalculator } from '../hooks/useCalculator'

const meta: Meta<typeof Keypad> = {
  title: 'Calculator/Keypad',
  component: Keypad,
}

export default meta
type Story = StoryObj<typeof Keypad>

const calc = {} as ReturnType<typeof useCalculator>

export const Default: Story = { args: { calc } }