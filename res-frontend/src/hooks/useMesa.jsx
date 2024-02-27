import { useEffect, useState } from 'react';
import { getMesas } from '../services/mesa';

export default function useMesa() {
  const [mesas, setMesas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() =>{
    async function fetchMesas() {
      try{
        setLoading(true);
        setError(null)
        const mesas = await getMesas();
        console.log(mesas)
        setMesas(mesas)
      } catch (e){
        setError(e.message)
      }
      finally{
        setLoading(false)
      }
    }

    fetchMesas();
  }, [])

  return { mesas, loading, error}

}
