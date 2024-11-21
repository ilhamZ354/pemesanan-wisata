import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react"
import { Button } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function PromoImage() {
    return (
        <div className="promo flex flex-col w-full px-4 md:px-8 justify-start items-start mt-12 mb-6">
            <h5 className="mb-2 text-slate-700 font-bold text-3xl">Special Promo For You!</h5>
            <Card className="bg-neutral-100 rounded-lg w-full" >
                <CardHeader className="flex flex-col absolute z-40 top-1 h-[400px] justify-center items-start ml-4">
                    <h5 className="text-2xl font-semibold text-white">Free for childreen, all destination!</h5>
                    <h5 className="text-base font-light text-white">Enjoy your journey with family</h5>
                    <h5 className="text-base font-light text-white">October 2024 - October 2025</h5>
                    <div className="sm:w-1/2 md:w-1/6 mt-2">
                    <Button className="hover:bg-white" color='white' rounded='full' variant="outlined" endIcon={<ArrowForwardIcon/>} sx={{ borderColor:'white', borderRadius: '15px', textTransform: "none", width:'100%', color:'white',
                    "&:hover": {
                        borderColor: 'white',
                        color: "black",
                    }, }}>Booking Now
                    </Button>
                    </div>
                </CardHeader>
                <CardBody>
                    <Image
                        width='100%'
                        alt="gambar-pesawat"
                        src="/images/snorkling.jpg"
                        className="object-cover opacity-75 h-[400px] rounded-lg"
                    />
                </CardBody>
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-20 justify-between">
                    <Button className="bg-white absolute z-32 m-3" color="white" endIcon={<ArrowForwardIcon/>} sx={{ textTransform:'none', padding:'10px', color:'#6594db', margin:'5px', borderRadius:'20px'}}>
                    Read More
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}