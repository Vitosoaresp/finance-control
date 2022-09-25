import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';
import { CreateTransactionDialog } from './components/CreateTransactionDialog';

import { Dashboard } from './components/Dashboard/Dasboard';
import Header from './components/Header';
import { Pagination } from './components/Pagination';
import { Table } from './components/Table';

export interface ITransactions {
  description: string;
  price: number;
  category: string;
  option: 'Entrada' | 'Saída';
  date: Date;
}

function App() {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);
  
  return (
    <>
      <Dialog.Root>
        <Header />

        <CreateTransactionDialog
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </Dialog.Root>
      
      <section className="relative bg-[#202024] px-32 pb-20 min-h-screen">
        <Dashboard />

        <div className="flex justify-between gap-4 pt-24 pb-4 w-full">
          <label htmlFor="search" className="w-full">
            <input id="search" type="text" className="bg-black w-full p-3 rounded-md text-white" placeholder="Busque uma transação" />
          </label>

          <button className="flex items-center gap-3 text-emerald-500 p-3 border border-emerald-500 rounded-md bg-transparent">
            <MagnifyingGlass size={20} color="#00B37E" />
            Buscar
          </button>
        </div>

        <Table 
          transactions={transactions}
        />

        {/* <Pagination /> */}
      </section>
    </>
  )
}

export default App
