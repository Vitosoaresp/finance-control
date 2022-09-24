import { MagnifyingGlass } from 'phosphor-react';
import { Dashboard } from './components/Dashboard/Dasboard';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <section className="relative bg-[#202024] px-32">
        <Dashboard />

        <div className="flex justify-between gap-4 pt-24 pb-6 w-full">
          <label htmlFor="search" className="w-full">
            <input id="search" type="text" className="bg-black w-full p-3 rounded-md text-white" placeholder="Busque uma transação" />
          </label>

          <button className="flex items-center gap-3 text-emerald-500 p-3 border border-emerald-500 rounded-md bg-transparent">
            <MagnifyingGlass size={20} color="#00B37E" />
            Buscar
          </button>
        </div>


        <table className="w-full">
          <tbody className="flex flex-col gap-2 w-full">
            <tr className="w-full flex text-gray-400 p-5 bg-[#323238] rounded">
              <td className="w-2/5">Desenvolvimento de site</td>
              <td className="w-1/4">R$ 12.000,00</td>
              <td className="w-1/5">Venda</td>
              <td className="w-auto">13/09/2022</td>
            </tr>
            <tr className="w-full flex text-gray-400 p-5 bg-[#323238] rounded">
              <td className="w-2/5">Pizza</td>
              <td className="w-1/4">- R$ 89,00</td>
              <td className="w-1/5">Comida</td>
              <td className="w-auto">12/09/2022</td>
            </tr>
            <tr className="w-full flex text-gray-400 p-5 bg-[#323238] rounded">
              <td className="w-2/5">Academia</td>
              <td className="w-1/4">- R$ 150,00</td>
              <td className="w-1/5">Lazer</td>
              <td className="w-auto">05/09/2022</td>
            </tr>
          </tbody>
        </table>

      </section>
    </>
  )
}

export default App
