type Props = {
  label: string
  onClick: () => void
  variant?: 'number' | 'op' | 'equal' | 'clear'
}

const Button = ({ label, onClick, variant = 'number' }: Props) => (
  <button className={`btn btn-${variant}`} onClick={onClick}>
    {label}
  </button>
)

export default Button