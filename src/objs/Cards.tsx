import { Card, CardContent, CardHeader, CardTitle, CardDescription  } from '@/components/ui/card'


export default function Cards(){
    return(
        <div className="w-full max-w-2xl space-y-6 mt-10">
  <Card>
    <CardHeader>
      <CardTitle>Assistente de Tesouraria</CardTitle>
      <CardDescription>Empresa XYZ • 2023 - Atual</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="list-disc list-inside text-left space-y-2">
        <li>Análise e controle financeiro de contas a pagar e receber.</li>
        <li>Automação de relatórios utilizando Python e Excel.</li>
        <li>Apoio no desenvolvimento de ferramentas internas usando JavaScript.</li>
      </ul>
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Estágio em Programação</CardTitle>
      <CardDescription>Empresa ABC • 2022 - 2023</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="list-disc list-inside text-left space-y-2">
        <li>Desenvolvimento de sistemas internos em ReactJS.</li>
        <li>Manutenção de aplicações Node.js e banco de dados PostgreSQL.</li>
      </ul>
    </CardContent>
  </Card>
</div>

    )
}