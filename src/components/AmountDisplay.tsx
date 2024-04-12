import { formatCurrency } from '../helpers/index';

type AmountDisplayProps = {
  label: string,
  amount: number
}

export default function AmountDisplay({label, amount}: AmountDisplayProps) {
  return (
    <p className="text-2xl text-green-600 font-bold">
      {label}: {''}
      <span className="font-black text-black">{formatCurrency(amount)}</span>
    </p>
  )
}
