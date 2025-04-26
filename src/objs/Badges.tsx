import { Badge } from "@/components/ui/badge";

export default function Badges(){
    return(
        <div className="flex justify-center gap-2 mb-4">
            <Badge className='bg-green-500 text-white'>Análista Financeiro</Badge>
            <Badge className='bg-blue-500 text-white'>Desenvolvedor Junior</Badge>
            <Badge className='bg-black text-white'>Python</Badge>
            <Badge className='bg-black text-white'>React</Badge>
        </div>
    )
}

