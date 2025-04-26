import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription  } from './components/ui/card'
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function App(){
  return(
    <main className='min-h-screen bg-gray-100 p-6 flex flex-col items-center'>
      <div className='text-center mb-8"'>
        <h1 className='text-4xl font-bold'>Thauan Vieira de Barcellos</h1>
        <div className='flex justify-center mt-4 gap-1'>
        <Badge className='bg-green-500 text-white'>Análista Financeiro</Badge>
        <Badge className='bg-blue-500 text-white'>Desenvolvedor Junior</Badge>
        <Badge className='bg-black text-white'>Python</Badge>
        <Badge className='bg-black text-white'>React</Badge>

        </div>
      </div>
    </main>





  )
}