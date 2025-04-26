import { Button } from "@/components/ui/button";

export default function Contato(){
    return(
    <div className="flex justify-center gap-3 mt-6">
    <Button asChild>
        <a href="mailto:thauanb@email.com">Email</a>
    </Button>
    <Button variant="outline" asChild>
        <a href="https://www.linkedin.com/in/thauan-vieira-de-barcellos/" target="_blank">LinkedIn</a>
    </Button>
    <Button variant="outline" asChild>
        <a href="https://github.com/thauanb-dev" target="_blank">GitHub</a>
    </Button>
    </div>
    )
}