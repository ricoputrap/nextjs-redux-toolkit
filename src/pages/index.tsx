import { Inter } from 'next/font/google'
import ButtonAddUser from './components/ButtonAddUser'
import UserTable from './components/UserTable'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className={`${inter.className} flex flex-col items-center gap-4 w-full min-h-screen py-10`}>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="text-4xl font-bold text-center text-gray-700">
          User Management
        </h1>
      </div>
      <div className="flex justify-start w-full px-4 py-2">
        <ButtonAddUser />
      </div>
      <UserTable />
    </main>
  )
}
