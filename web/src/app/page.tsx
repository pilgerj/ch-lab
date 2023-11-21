import { MoveRight } from 'lucide-react'
const Home = () => {

  return (
    <div>
      {/* Cabecalho */}
      <div
        className="
        w-20 h-20 
        bg-gradient-to-t from-primary-600 to-primary-700 
        px-6 py-5
        space-y-8
        flex
        flex-col
        gap-8
        "
      >
        {/* <h1 className='font-bold leading-heading'>Hello !</h1> */}
        <img src='https://github.com/pilgerj.png' alt=''
          className='rounded-full h-16 w-16 self-end'
        />
        <span className='text-2xl font-bold leading-heading text-black-950'>CH Lab</span>
      </div>

      <main className='p-6 flex flex-col gap-4 bg-black-950'>
        <span className='text-lg font-bold leading-heading'>Cursos</span>

        <div className='flex justify-between'>

          <div className='flex gap-5 py-6 px-6 w-[24rem] h-[13rem] rounded-lg border-spacing-6 border-2 border-primary-900 bg-black-600' >
            <span>Teste</span>
          </div>
          <div className='flex gap-5 py-6 px-6 w-[24rem] h-[13rem] rounded-lg border-spacing-6 border-2 border-primary-900 bg-black-600'>
            <span>Teste</span>
          </div>
          <div className='flex gap-5 py-6 px-6 w-[24rem] h-[13rem] rounded-lg border-spacing-6 border-2 border-primary-900 bg-black-600'>
            <span>Teste</span>
          </div>
        </div>

        <a href='#' className='py-3 px-5 flex items-center gap-3 justify-end'>
          <span>Ver todos</span>
          <MoveRight className='w-5 h-5' />
        </a>
      </main>

      <style>
       
      </style>
    </div>

  )
}
export default Home;
