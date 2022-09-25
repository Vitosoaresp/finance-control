import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { ITransaction } from '../../App';
import { CardDashboard } from './CardDashboard';

interface IDashboadProps {
  transactions: ITransaction[];
}

export function Dashboard(props: IDashboadProps) {

  const incoming = props.transactions
    .filter(transaction => transaction.option === 'Entrada')
    .reduce((acc, current) => acc += Number(current.price), 0);
    
  const expense = props.transactions
    .filter(transaction => transaction.option === 'Saída')
    .reduce((acc, current) => acc += Number(current.price), 0);

  return (
    <div className="flex gap-8 justify-center absolute -top-20 lef-1/2 right-1/2 translate-x-1/2">
      <CardDashboard
        type="Entradas"
        value={incoming}
        icon={<ArrowCircleUp color="#00B37E" size={32} />}
      />
      <CardDashboard
        type="Saídas"
        value={expense}
        icon={<ArrowCircleDown color="#F75A68" size={32} />}
      />
      <CardDashboard
        type="Total"
        value={incoming - expense}
        icon={<CurrencyDollar color="white" size={32} />}
      />
    </div>
  )
}