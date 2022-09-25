import { ReactElement } from 'react';

interface ICardDashboadProps {
  icon: ReactElement;
  type: 'Entradas' | 'Saídas' | 'Total';
  value: number;
}

export function CardDashboard(props: ICardDashboadProps) {
  return (
    <div
      className={`${props.type === 'Total' ? 'bg-emerald-800' : 'bg-[#323238]'} flex flex-col gap-3 md:w-[352px] w-[80%] p-6 rounded-md ${props.type === 'Total' && 'border border-black'} sm:flex-none`}
    >

      <div className="flex items-center w-full justify-between">
        <span className="font-normal text-gray-400">{props.type}</span>
        <span>{props.icon}</span>
      </div>

      <div className="w-full font-bold text-3xl text-white">
        <span>{props.value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</span>
      </div>

    </div>
  )
}