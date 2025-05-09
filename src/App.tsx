import './App.css'
import Contato from './objs/Contato'
import Badges from './objs/Badges'
import Cards from './objs/Cards'
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator";

export default function App(){
  return(
    <main className='min-h-screen bg-gray-100 p-6 flex flex-col items-center'>
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold'>Thauan Vieira de Barcellos</h1>
        <Contato/>
        <div className='flex justify-center mt-4'>
          <Avatar className=' w-64 h-64 mb-4 '>
            <AvatarImage src="/avatar.jpeg"/>
          </Avatar>
        </div>
        <Badges/>
        <Cards/>
      </div>

    </main>





  )
}