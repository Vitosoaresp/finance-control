import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlass } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { CreateTransactionDialog } from './components/CreateTransactionDialog';

import { Dashboard } from './components/Dashboard/Dasboard';
import Header from './components/Header';
import { Pagination } from './components/Pagination';
import { Table } from './components/Table';

export interface ITransaction {
  description: string;
  price: number;
  category: string;
  option: 'Entrada' | 'Saída';
  date: Date;
  id: string;
}

function App() {
  const [transactions, setTransactions] = useState<ITransaction[]>(
    JSON.parse(localStorage.getItem('transactions')) || [],
  );
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions])

  const filteredTransactionsBySearch = transactions.filter(tr => tr.description.includes(search));
  
  return (
    <>
      <Dialog.Root>
        <Header />

        <CreateTransactionDialog
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </Dialog.Root>
      
      <section className="relative bg-[#202024] px-5 md:px-32 pb-20 min-h-screen">
        <Dashboard transactions={transactions} />

        <div className="flex justify-between gap-4 pt-24 pb-4 w-full">
          <label htmlFor="search" className="w-full">
            <input id="search" onChange={(e) => setSearch(e.target.value)} type="text" className="bg-black w-full p-3 rounded-md text-white" placeholder="Busque uma transação pela sua descrição" />
          </label>

          <button className="flex items-center gap-3 text-emerald-500 p-3 border border-emerald-500 rounded-md bg-transparent">
            <MagnifyingGlass size={20} color="#00B37E" />
            Buscar
          </button>
        </div>

        <Table 
          transactions={filteredTransactionsBySearch}
          setTransactions={setTransactions}
        />

        {/* <Pagination /> */}
      </section>
    </>
  )
}

export default App
