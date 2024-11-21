import { Card, CardBody, Image } from "@nextui-org/react"
import { Button } from "@mui/material"
export default function Rightside () {
    return (
        <div className="flex gap-3 flex-col w-full">
            <Card className="bg-neutral-100 rounded-lg w-full" >
                <CardBody>
                    <Image
                        width='100%'
                        alt="gambar-pesawat"
                        src="/images/pesawat-udara.jpg"
                        className="object-cover h-[180px] opacity-75"
                    />
                </CardBody>
            </Card>
            <Card className="border border-neutral-200 rounded-lg w-full">
                <CardBody>
                    <div className="flex flex-col m-3">
                        <div className="mt-3 pe-28">
                        <p className="text-medium font-semibold text-slate-600">With us, let{`'`}s explore the beauty of Indonesia{`'`}s natural paradise. We guarantee the safety, comfort and satisfaction of your trip</p>
                        </div>
                    </div>
                    <div className="m-3 w-1/4 mb-4">
                        <Button color="dark" variant='outlined' className='bg-black' sx={{ color:'white', borderRadius:'15px', width:'100%', backgroundColor:'black', textTransform:'none' }}>Book Now</Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}