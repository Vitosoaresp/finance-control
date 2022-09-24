import { CaretLeft, CaretRight, MagnifyingGlass } from 'phosphor-react';

import { Dashboard } from './components/Dashboard/Dasboard';
import Header from './components/Header';
import { Table } from './components/Table';

import { TableLines } from './TableLines';

function App() {
  
  return (
    <>
      <Header />
      <section className="relative bg-[#202024] px-32 pb-20">
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
          props={TableLines}
        />

        <div className="flex items-center justify-center -mt-2">
          <button><CaretLeft size={32} color="#323238" /></button>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-md text-white font-bold bg-emerald-600">1</button>
            <button className="w-10 h-10 rounded-md text-white font-bold bg-[#323238]">2</button>
            <button className="w-10 h-10 rounded-md text-white font-bold bg-[#323238]">3</button>
          </div>
          <button><CaretRight size={32} color="#00B37E" /></button>
        </div>
      </section>
    </>
  )
}

export default App
