export interface ITableProps {
  props: {  
    descricao: string;
    preco: number;
    categoria: string;
    data: Date;
  }[]
}

export function Table({ props }: ITableProps) {
  console.log(props);
  
  return (
    <table className='w-full'>
      <thead>
        <tr className='w-full flex text-gray-400 p-5'>
          <td className='w-2/5'>Descrição</td>
          <td className='w-1/4'>Preço</td>
          <td className='w-1/5'>Categoria</td>
          <td className='w-auto'>Data</td>
        </tr>
      </thead>
      <tbody className='flex flex-col gap-2 w-full'>
        
        { props.map((item, key) => (
        <tr key={key} className='w-full flex text-gray-400 p-5 bg-[#323238] rounded'>
          <td className='w-2/5'>{item.descricao}</td>
          <td className={`w-1/4 ${item.preco.toString().includes('-') ? 'text-[#F75A68]' : 'text-emerald-600'}`}>{item.preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</td>
          <td className='w-1/5'>{item.categoria}</td>
          <td className='w-auto'>{item.data.toLocaleDateString()}</td>
        </tr>
        ))}
        
      </tbody>
    </table>
  );
}
