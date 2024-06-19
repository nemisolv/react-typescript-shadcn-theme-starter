import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react"

function Home() {
    return <div className="bg-slate-400 ">
        <Button variant="destructive">
            <Mail className="mr-2 size-4" /> Login with Email
        </Button>
    </div>
}


export default Home