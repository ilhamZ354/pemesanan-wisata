import { Card, CardBody } from "@nextui-org/react";
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function LeftSide () {
    return (
        <div className="flex w-full h-full">
            <Card className="flex flex-col w-full rounded-lg bg-neutral-100">
            <CardBody className="flex flex-col m-6\ justify-start items-start m-4">
                <h5 className="font-bold text-zinc-600 text-3xl">Let{`'`}s explore</h5>
                <h5 className="font-bold text-zinc-600 text-3xl">Indonesia Together</h5>
                <div className="mt-4 pe-3">
                <p className="items-start text-left mt-4 text-balance font-semibold text-zinc-400">Indonesia{`'`}s rich cultural heritage, traditional dances, and diverse cuisine provide an immersive experience. Whether you{`'`}re interested in nature, adventure, history, or relaxation, Indonesia{`'`}s scenic landscapes and welcoming people make it a memorable destination</p>
                </div>
                <div className='mt-4 md:w-1/2'>
                <Button className="hover:bg-black" color='dark' rounded='full' variant="outlined" endIcon={<ArrowForwardIcon/>} sx={{ borderRadius: '15px', textTransform: "none", width:'100%',
                    "&:hover": {
                        borderColor: 'black',
                        color: "white",
                    }, }}>Explore Now
                    </Button>
                </div>
            </CardBody>
        </Card>
        </div>
    )
}