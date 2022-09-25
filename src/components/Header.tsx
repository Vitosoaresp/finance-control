import * as Dialog from '@radix-ui/react-dialog';
import { Money } from 'phosphor-react';

export default function Header() {
  return (
    <header className="bg-black pt-10 px-40 pb-32">
      <div className="flex h-12 justify-between w-full ">
        <p className="flex items-center gap-2 text-2xl font-bold text-zinc-200">
          <Money color="#015F43" size={72} />
          <span>Finance Control</span>
        </p>

        <Dialog.Trigger
          className="text-base font-bold py-3 px-5 bg-emerald-700 rounded hover:bg-emerald-800 transition-colors text-white"
        >
          Nova transação
        </Dialog.Trigger>
      </div>
    </header>
  )
}
