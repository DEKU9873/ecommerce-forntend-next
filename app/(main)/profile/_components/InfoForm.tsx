import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,

} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
const InfoForm = () => {

    return (
        <Card >

            <CardHeader>
        <h3 className='font-semibold text-xl'>Personal Information</h3>

            </CardHeader>

            <CardContent className="grid grid-cols-2 gap-4 " >
                
                <div className="flex flex-col gap-3">
                    <Label htmlFor="name">Full Name</Label>
                    <Input placeholder="Full Name" defaultValue={"Al-Hassan Mohammed"} />
                </div>
                <div className="flex flex-col gap-3">

                    <Label htmlFor="email">Email</Label>
                    <Input placeholder="Email" defaultValue={"al-hassan@example.com"} />
                </div>

                <div className="flex flex-col gap-3">

                    <Label htmlFor="phone">Phone Number</Label>
                    <Input placeholder="Phone Number"  defaultValue={"0123456789"} />
                </div>


            </CardContent>
            <CardFooter className="flex flex-col justify-center items-start   gap-4">
                <Button className="text-md">Save Change</Button>
            </CardFooter>
        </Card>
    )
}

export default InfoForm
