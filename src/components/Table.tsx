import { Trash } from 'phosphor-react';
import { Dispatch, SetStateAction } from 'react';
import { ITransaction } from '../App';

interface ITableProps {
  transactions: ITransaction[];
  setTransactions: Dispatch<SetStateAction<ITransaction[]>>;
}

export function Table({ transactions, setTransactions }: ITableProps) {

  function handleRemoveTransaction(transaction: ITransaction) {
    const newTransactions = transactions.filter(item => item.id !== transaction.id);
    setTransactions(newTransactions);
  }
  
  return (
    <table className='w-full'>
      <thead className="">
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
        <tr key={key} className='w-full flex md:flex-row gap-2 md-gap-0 flex-col text-gray-400 p-5 bg-[#323238] rounded relative'>
          <td className='md:w-2/5 w-full text-2xl md:text-base'>{item.description}</td>
          <td className={`md:w-1/4 ${item.option === 'Saída' ? 'text-[#F75A68]' : 'text-emerald-600'} text-2xl md:text-base`}>
            {item.option === 'Saída' && '- ' }
            {Number(item.price).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </td>
          <td className='md:w-1/5 w-full text-1xl md:text-base'>{item.category}</td>
          <td className='md:w-auto md:text-start text-end -mt-9 md:mt-0'>{new Date(item.date).toLocaleDateString()}</td>
          <td className='md:w-auto pl-8 flex justify-end md:static absolute top-4 right-4'>
            <button onClick={() => handleRemoveTransaction(item)}>
              <Trash color='#F75A68' size={24} />
            </button>
          </td>
        </tr>
        ))}
        
      </tbody>
    </table>
  );
}
