import { CaretLeft, CaretRight } from 'phosphor-react';

export function Pagination() {
  return (
    <div className='flex items-center justify-center -mt-2'>
      <button>
        <CaretLeft
          size={32}
          color='#323238'
        />
      </button>
      <div className='flex gap-2'>
        <button className='w-10 h-10 rounded-md text-white font-bold bg-emerald-600'>
          1
        </button>
        <button className='w-10 h-10 rounded-md text-white font-bold bg-[#323238]'>
          2
        </button>
        <button className='w-10 h-10 rounded-md text-white font-bold bg-[#323238]'>
          3
        </button>
      </div>
      <button>
        <CaretRight
          size={32}
          color='#00B37E'
        />
      </button>
    </div>
  );
}
