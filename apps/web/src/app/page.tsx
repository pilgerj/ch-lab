import { MoveRight } from 'lucide-react'
const Home = () => {
  return (
    <div>
      {/* Cabecalho */}
      <div className="h-[14rem] bg-gradient-to-tl from-primary-400 to-primary-700 
        px-6 py-5 space-y-8 flex flex-col gap-8">
        {/* <h1 className='font-bold leading-heading'>Hello !</h1> */}
        <img src='https://github.com/pilgerj.png' alt=''
          className='rounded-full h-16 w-16 self-end'
        />
        <span className='text-2xl font-bold leading-heading text-black-950'>CH Lab</span>
      </div>

      {/* Main */}
      <main className='p-6 flex flex-col gap-4 bg-black-950'>
        {/* Linha 01 */}
        <div className='p-6'>
          <span className='text-lg font-bold leading-heading'>Seus Cursos</span>

          <div className='flex justify-between py-3 my-4'>

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

          <div className='flex justify-end my-4'>
            <a href='#' className='py-3 px-6 flex w-[10rem] gap-3 border-2 border-primary-900 rounded-lg justify-between align-baseline bg-primary-800'>
              <span>Ver todos</span>
              <MoveRight className='w-6 h-6 align-middle justify-center' />
            </a>
          </div>
        </div>

        {/* Linha 02 */}
        <div className='p-6'>
          <span className='text-lg  font-bold leading-heading'>Especiais CH Lab</span>

          <div className='flex justify-between py-3 my-4'>

            <div className='flex gap-5 py-6 px-6 w-[24rem] h-[13rem] rounded-lg border-spacing-6 border-2 border-primary-900 bg-black-600' >
              <span className='flex justify-center align-middle '>Teste</span>
            </div>
            <div className='flex gap-5 py-6 px-6 w-[24rem] h-[13rem] rounded-lg border-spacing-6 border-2 border-primary-900 bg-black-600'>
              <span>Teste</span>
            </div>
            <div className='flex gap-5 py-6 px-6 w-[24rem] h-[13rem] rounded-lg border-spacing-6 border-2 border-primary-900 bg-black-600'>
              <span>Teste</span>
            </div>
          </div>

          <div className='flex justify-end my-4'>
            <a href='#' className='py-3 px-6 flex w-[10rem] gap-3 border-2 border-primary-900 rounded-lg justify-between align-baseline bg-primary-800'>
              <span>Ver todos</span>
              <MoveRight className='w-6 h-6 align-middle justify-center' />
            </a>
          </div>

        </div>
      </main >

    </div >

  )
}
export default Home;
