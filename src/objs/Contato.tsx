import { Button } from "@/components/ui/button";

export default function Contato(){
    return(
    <div className="flex justify-center gap-3 mt-6">
    <Button asChild>
        <a href="mailto:thauan@email.com">Email</a>
    </Button>
    <Button variant="outline" asChild>
        <a href="https://linkedin.com/in/seu-usuario" target="_blank">LinkedIn</a>
    </Button>
    <Button variant="outline" asChild>
        <a href="https://github.com/seu-usuario" target="_blank">GitHub</a>
    </Button>
    </div>
    )
}