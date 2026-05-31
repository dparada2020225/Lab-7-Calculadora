import type { Meta, StoryObj } from '@storybook/react-vite'
import Display from '../components/Display'

const meta: Meta<typeof Display> = {
  title: 'Calculator/Display',
  component: Display,
}

export default meta
type Story = StoryObj<typeof Display>

export const Default: Story = { args: { value: '0' } }
export const LongNumber: Story = { args: { value: '123456789' } }
export const Error: Story = { args: { value: 'ERROR' } }
export const Decimal: Story = { args: { value: '3.1415926' } }
export const Negative: Story = { args: { value: '-42' } }