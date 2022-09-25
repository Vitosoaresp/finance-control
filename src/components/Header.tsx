import * as Dialog from '@radix-ui/react-dialog';
import { Money } from 'phosphor-react';

export default function Header() {
  return (
    <header className="bg-black pt-10 md:px-40 px-5 pb-32">
      <div className="flex h-12 justify-between w-full ">
        <p className="flex items-center gap-2 md:text-2xl text-base font-bold text-zinc-200">
          <Money color="#015F43" size={72} />
          <span>Finance Control</span>
        </p>

        <Dialog.Trigger
          className="md:text-base text-sm font-bold py-3 md:px-5 px-3 bg-emerald-700 rounded hover:bg-emerald-800 transition-colors text-white"
        >
          Nova transação
        </Dialog.Trigger>
      </div>
    </header>
  )
}
