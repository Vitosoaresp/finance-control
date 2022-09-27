import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';
import { ITransaction } from '../App';
import ComboboxHeadless, { ICategory } from './ComboboxHeadless';

interface ICreateTransactionDialogProps {
  transactions: ITransaction[];
  setTransactions: Dispatch<SetStateAction<ITransaction[]>>;
}
const categories = [
  { id: 1, name: 'Salário' },
  { id: 2, name: 'Bônus' },
  { id: 3, name: 'Comissão' },
  { id: 4, name: 'Alimentação' },
  { id: 5, name: 'Lazer' },
  { id: 6, name: 'Transporte' },
  { id: 7, name: 'Casa' },
  { id: 8, name: 'Despesas Pessoais' },
  { id: 9, name: 'Saúde' },
  { id: 10, name: 'Outros' },
]

export function CreateTransactionDialog(props: ICreateTransactionDialogProps ) {
  const [selected, setSelected] = useState<ICategory>(categories[0])
  const [optionSelected, setOptionSelected] = useState<'Entrada' | 'Saída'>('Entrada');

  function submitCreateTransaction(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData);
    const newTransaction = {
      ...data,
      option: optionSelected,
      date: new Date(Date.now()),
      id: uuidv4(),
      category: selected.name,
    } as ITransaction;

    props.setTransactions([...props.transactions, newTransaction])
    alert('Nova Transação adicionada com sucesso!')
  }

  return (
    <Dialog.DialogPortal>
      <Dialog.Overlay className="bg-black/70 fixed inset-0" />

      <Dialog.Content className="fixed rounded-md shadow-md bg-[#202024] w-[535px] h-[528px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 pb-14">
        <Dialog.Close className="fixed top-7 right-7">
          <X size={24} color="#7c7c8a" />
        </Dialog.Close>
        <Dialog.Title className="text-2xl font-bold text-gray-200">Nova transação</Dialog.Title>

        <form onSubmit={submitCreateTransaction} className="w-full mt-8">
          <div className="flex flex-col w-full gap-6">
            <label htmlFor="description">
              <input type="text" name="description" required id="description" placeholder="Descrição" className="bg-black/40 w-full p-4 rounded-md text-gray-200" />
            </label>
            <label htmlFor="price">
              <input type="text" name="price" required id="price" placeholder="Preço" className="bg-black/40 w-full p-4 rounded-md text-gray-200" />
            </label>
            <label htmlFor="category">
              <ComboboxHeadless
                categories={categories}
                selected={selected}
                setSelected={setSelected}
              />
            </label>
          </div>
        

          <div className="flex w-full pt-6 pb-10 gap-4">
            <button type="button" className={`bg-gray-600/20 rounded-md w-full justify-center text-gray-300 font-normal flex gap-2 items-center py-4 px-8 ${optionSelected === 'Entrada' && 'border border-emerald-700'}`} onClick={() => setOptionSelected('Entrada')}>
              <ArrowCircleUp color="#00B37E" size={24} />
              Entrada
            </button>
            <button type="button" className={`bg-gray-600/20 rounded-md w-full justify-center text-gray-300 font-normal flex gap-2 items-center py-4 px-8 ${optionSelected === 'Saída' && 'border border-[#F75A68]'}`} onClick={() => setOptionSelected('Saída')}>
              <ArrowCircleDown color="#F75A68" size={24} />
              Saída
            </button>
          </div>

          <button type='submit' className="w-full py-4 px-8 bg-emerald-700 rounded-md text-gray-200 font-bold hover:bg-emerald-800 transition-colors">
            Cadastrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.DialogPortal>
  )
}