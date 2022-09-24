import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { CardDashboard } from './CardDashboard';

export function Dashboard() {
  return (
    <div className="flex gap-8 justify-center absolute -top-20 lef-1/2 right-1/2 translate-x-1/2">
      <CardDashboard
        type="Entradas"
        value={27000}
        icon={<ArrowCircleUp color="#00B37E" size={32} />}
      />
      <CardDashboard
        type="Saídas"
        value={25000}
        icon={<ArrowCircleDown color="#F75A68" size={32} />}
      />
      <CardDashboard
        type="Total"
        value={27000}
        icon={<CurrencyDollar color="white" size={32} />}
      />
    </div>
  )
}