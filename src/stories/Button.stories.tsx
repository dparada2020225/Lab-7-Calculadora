import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from '../components/Button'

const meta: Meta<typeof Button> = {
  title: 'Calculator/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Number: Story = { args: { label: '5', variant: 'number', onClick: () => {} } }
export const Operator: Story = { args: { label: '+', variant: 'op', onClick: () => {} } }
export const Equal: Story = { args: { label: '=', variant: 'equal', onClick: () => {} } }
export const Clear: Story = { args: { label: 'C', variant: 'clear', onClick: () => {} } }