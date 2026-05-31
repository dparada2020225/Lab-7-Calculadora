type Props = { value: string }

const Display = ({ value }: Props) => (
  <div className="display">
    <span>{value}</span>
  </div>
)

export default Display