import { useState } from "react";
import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlaceIcon from '@mui/icons-material/Place';
import PaymentIcon from '@mui/icons-material/Payment';

export default function CardAccordion() {
    const list = [
        { title: "Pantai Kelingking", location:'Nusa Penida, Bali', price:'$100 / person', img: "/images/pantai-kelingking-bali.jpeg" },
        { title: "Borobudur", location:'Magelang, Jawa Tengah', price:'$120 / person', img: "/images/borobudur.jpeg" },
        { title: "Wisata Bromo", location:'Pasuruan, Jawa Timur', price:'$80 / person', img: "/images/bromo.jpeg" },
        { title: "Pulau Samosir", location:'Danau Toba, Sumut', price:'$150 / person',  img: "/images/danau-toba.jpeg" },
        { title: "Air Terjun Ciblungan", location:'Malang, Jawa Timur', price:'$50 / person', img: "/images/ciblungan-malang.jpeg" },
        { title: "Pulau Bawean", location:'Bawean, Jawa Timur', price:'$90 / person', img: "/images/pulau-bawean.jpeg" },
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleClick = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <div className="destination flex w-full justify-center mt-6">
            <div className="m-8 flex gap-3">
                {list.map((item, index) => (
                    <Card
                        key={index}
                        isPressable
                        onPress={() => handleClick(index)}
                        className={`cursor-pointer transition-all duration-300 rounded-xl overflow-hidden bg-black border border-none group ${
                            expandedIndex === index ? "w-1/2" : "w-1/6"
                        }`}
                    >
                        <Image
                            alt={item.title}
                            src={item.img}
                            fetchPriority="high"
                            className="object-cover h-[350px] w-full transition-opacity duration-300 group-hover:opacity-50"
                        />
                        <CardFooter className="absolute top-0 w-full h-[350px] flex flex-col justify-end items-start z-30 pointer-events-auto">
                            <div className="flex flex-col w-full justify-start">
                                <div className="flex flex-wrap w-full mb-2 ml-2">
                                    <p className="flex text-white font-normal text-sm break-words text-start"><PlaceIcon fontSize="small"/> : {item.location}</p>
                                </div>
                                <div className="flex flex-row w-full mb-4 ml-2">
                                    <p className="flex text-white font-normal text-sm break-words"><PaymentIcon fontSize="small"/> : {item.price}</p>
                                </div>
                                <div className="w-full">
                                    <Button 
                                        onClick={() => { console.log('card clicked') }}
                                        className="hover:bg-white" 
                                        color="light" 
                                        rounded="full" 
                                        variant="outlined" 
                                        endIcon={<ArrowForwardIcon />} 
                                        sx={{
                                            borderColor: 'white', 
                                            color: 'white', 
                                            borderRadius: '11px', 
                                            textTransform: "none", 
                                            width: '100%',
                                            "&:hover": {
                                                borderColor: 'white',
                                                color: "black",
                                            },
                                        }}
                                    >
                                        Booking Now
                                    </Button>
                                </div>
                            </div>
                        </CardFooter>
                        <CardHeader className="absolute top-1 w-full h-[350px] flex flex-col content-between items-start z-10 pointer-events-none">
                            <h1 className="text-white font-normal hidden group-hover:block ml-3 mt-2">
                                {item.title}
                            </h1>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
}
