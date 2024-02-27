import ListMesas from '../components/ListMesas';
import RegisterMesa from '../components/RegisterMesa';

export default function Home() {
  return (
      <section className='w-full flex flex-col justify-between'>
        <ListMesas/>
        <RegisterMesa/>
    </section>
  )
}
