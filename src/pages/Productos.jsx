import useAuth from '../hooks/useAuth';
import { useState } from 'react';
import Pagination from '../Components/Pagination';

export default function RecipeReviewCard() {
  const { productos, loading } = useAuth();
  const [dataQt, setDataQt] = useState(8);
  const [currentPage, setCurrentPage] = useState(1); 
  const indexFin = currentPage * dataQt;
  const indexIni = indexFin - dataQt;
  const data = productos.slice(indexIni, indexFin);
  const nPges = Math.ceil(productos.length / dataQt);
 


  return (
    <>
    <div className='grid grid-cols-4 gap-3 '>
      {data.map((data) => (
        <div key={data.id} className="max-w-xs rounded overflow-hidden shadow-lg bg-white mb-4 ">
          <img src={data.img} alt={data.name} className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{data.name}</div>
            <p className="text-gray-700 text-base">
              {data.description}
            </p>
          </div>
          <div className="px-6 py-4 flex justify-between">
            <span className="inline-block bg-gray-200 rounded-full px-2 py-1 font-semibold text-green-600 mr-2 text-2xl">${data.price}</span>
            <button className="bg-gray-200 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-up">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M12.5 17h-6.5v-14h-2" />
                <path d="M6 5l14 1l-.854 5.977m-2.646 1.023h-10.5" />
                <path d="M19 22v-6" />
                <path d="M22 19l-3 -3l-3 3" />
              </svg>
            </button>
            <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d31212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heart">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
    <div> { loading ? <span>Cargando ...</span>:
        <Pagination 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage}
        nPges= {nPges} />
        } 
        </div> 
    </>
    
  );
}
