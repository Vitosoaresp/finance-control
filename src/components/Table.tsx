import { ITransactions } from '../App';

interface ITableProps {
  transactions: ITransactions[];
}

export function Table({ transactions }: ITableProps) {
  
  return (
    <table className='w-full'>
      <thead>
        <tr className='w-full flex text-gray-400 p-5'>
          <td className='w-2/5'>Descrição</td>
          <td className='w-1/4'>Preço</td>
          <td className='w-1/5'>Categoria</td>
          <td className='w-auto'>Data</td>
        </tr>
      </thead>
      <tbody className='flex flex-col gap-2 w-full'>

        {transactions.length < 1 && (
          <p className="text-white font-medium text-center">Nenhuma transação por aqui, clique em <strong>Nova transação</strong> para começar a adicionar suas transações</p>
        )}
        
        {transactions.map((item, key) => (
        <tr key={key} className='w-full flex text-gray-400 p-5 bg-[#323238] rounded'>
          <td className='w-2/5'>{item.description}</td>
          <td className={`w-1/4 ${item.option === 'Saída' ? 'text-[#F75A68]' : 'text-emerald-600'}`}>
            {item.option === 'Saída' && '- ' }
            {Number(item.price).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </td>
          <td className='w-1/5'>{item.category}</td>
          <td className='w-auto'>{item.date.toLocaleDateString()}</td>
        </tr>
        ))}
        
      </tbody>
    </table>
  );
}
