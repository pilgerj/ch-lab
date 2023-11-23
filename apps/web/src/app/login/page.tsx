'use client'
import Link from 'next/link'
import Head from 'next/head'
import { Pyramid, FlaskConical } from 'lucide-react'
import { useForm } from 'react-hook-form'

const Login = () => {

    const { register, handleSubmit } = useForm();

    async function handleSignIn (data: any, component: any) {
        console.log('sign in', data)
        fetch('http://localhost:3333/signin', { method: 'GET' }).then( async response => {
            console.log('sign in response', response)
            const responseData = await response.json();
            console.log('sign in responseData', responseData)
        })
    }

    return (
        <Link href="/login">
            <div className='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8' >
                <Head>
                    <title>Login</title>
                    <h1>Login</h1>
                </Head>

                <div className='max-w-md w-full space-y-8 bg-black-900 rounded-lg shadow-lg  shadow-black-800 py-5'>
                    <div className='py-5 w-full flex flex-col items-center' >
                        <div>
                            <FlaskConical className='mx-auto h-12 w-auto' />
                            <h1 className='mt-4 px-6 text-center'>CH Lab</h1>
                            <h2 className='mt-2 px-6 text-center text-black-200'>Faça login </h2>
                        </div>

                        <form>
                            <div className='flex flex-col mt-6'>
                                <label htmlFor="email" className='text-start text-black-200 text-sm'>
                                    E-mail
                                </label>
                                <input
                                    {...register('email')}
                                    id="email"
                                    name="email"
                                    placeholder='exemplo@email.com'
                                    autoComplete='email'
                                    required
                                    color='white'
                                    type="email"
                                    className='p-2 mt-2 bg-black-950 w-auto text-black-200 rounded-md'
                                />
                            </div>

                            <div className='flex flex-col my-2'>
                                <label htmlFor="password" className='text-start text-black-200 text-sm'>
                                    Senha
                                </label>
                                <input
                                    {...register('password')}
                                    id="password"
                                    name="password"
                                    type="password"
                                    color='white'
                                    autoComplete='current-password'
                                    required
                                    className='p-2 mt-2 bg-black-950 w-auto text-black-200 rounded-md border-[1px] border-black-800 shadow-inner '
                                />
                            </div>

                            <button
                                type='submit'
                                onClick={handleSubmit(handleSignIn)}
                                className='bg-primary-700 mt-4 py-2 px-20 rounded-md hover:bg-primary-500 
                                focus:ring-2 focus:ring-primary-600'
                            >
                                Entrar
                            </button>
                        </form>
                        <div>
                            <h2 className='mt-2 px-6 text-center text-black-200'>ou crie sua conta</h2>
                        </div>

                    </div>

                </div>
            </div>
        </Link>
    )
}

export default Login;