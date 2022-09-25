import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export function CreateTransactionDialog() {
  return (
    <Dialog.DialogPortal>
      <Dialog.Overlay className="bg-black/70 fixed inset-0" />

      <Dialog.Content className="fixed rounded-md shadow-md bg-[#202024] w-[535px] h-[528px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 pb-14">
        <Dialog.Close className="fixed top-7 right-7">
          <X size={24} color="#7c7c8a" />
        </Dialog.Close>
        <Dialog.Title className="text-2xl font-bold text-gray-200">Nova transação</Dialog.Title>

        <form action="" className="flex flex-col w-full gap-6 mt-8">
          <label htmlFor="desc">
            <input type="text" name="desc" id="desc" placeholder="Descrição" className="bg-black/40 w-full p-4 rounded-md text-gray-200" />
          </label>
          <label htmlFor="preço">
            <input type="text" name="preço" id="preço" placeholder="Preço" className="bg-black/40 w-full p-4 rounded-md text-gray-200" />
          </label>
          <label htmlFor="categoria">
            <input type="text" name="categoria" id="categoria" placeholder="Categoria" className="bg-black/40 w-full p-4 rounded-md text-gray-200" />
          </label>
        </form>

        <div className="flex w-full pt-6 pb-10 gap-4">
          <button className="bg-gray-600/20 rounded-md w-full justify-center text-gray-300 font-normal flex gap-2 items-center py-4 px-8">
            <ArrowCircleUp color="#00B37E" size={24} />
            Entrada
          </button>
          <button className="bg-gray-600/20 rounded-md w-full justify-center text-gray-300 font-normal flex gap-2 items-center py-4 px-8">
            <ArrowCircleDown color="#F75A68" size={24} />
            Saída
          </button>
        </div>

        <button type="submit" className="w-full py-4 px-8 bg-emerald-700 rounded-md text-gray-200 font-bold hover:bg-emerald-800 transition-colors">
          Cadastrar
        </button>
      </Dialog.Content>
    </Dialog.DialogPortal>
  )
}