export default function Button({ name, onClick}) {
    return(
        <button
            onClick={onClick}
            className='bg-primary-200 w-full py-4 text-accent-200 rounded-3xl hover:bg-accent-100 hover:scale-105 transition-all hover:font-bold text-xl'>
            {name}
        </button>
    )
}