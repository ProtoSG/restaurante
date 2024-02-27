import useMesa from "../hooks/useMesa";
import Dialog from "./Dialog";

export default function ListMesas() {
    
    const { mesas, loading, error } = useMesa()

    console.log(mesas)

    return (
        <div>
        {
            loading ? <p>Cargando...</p>
            :
            <div className='grid grid-cols-3 gap-10 '>
            {mesas.map((mesa) => (
                <div key={mesa.id} className='flex flex-col items-center justify-evenly w-full h-40 bg-bg-200 m-2 text-text-100 px-4 rounded-3xl shadow-2xl'>
                    <p className='text-2xl'>Mesa {mesa.name}</p>
                    <Dialog mesa = {mesa} />
                </div>
            ))}
            </div>
        }
        </div>
    );
}
