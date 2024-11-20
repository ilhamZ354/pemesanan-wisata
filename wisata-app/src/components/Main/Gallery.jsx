import { Card, CardHeader, Image } from "@nextui-org/react";
import Marquee from "../Marquee/Marquee";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";

export default function Gallery() {
  const list = [
    { title: "Raja Ampat", img: "/images/raja-ampat.jpg" },
    { title: "Sabang", img: "/images/sabang.jpg" },
    { title: "Lombok", img: "/images/lombok.jpg" },
    { title: "Aceh", img: "/images/aceh.jpeg" },
    { title: "Jakarta", img: "/images/jakarta.jpeg" },
    { title: "Padang", img: "/images/padang.jpeg" },
  ];

  return (
    <div className="gallery bg-white pt-11 justify-center mb-11">
      <Marquee />
      <div className="flex justify-center items-center mt-3">
        <div className="flex flex-wrap justify-center gap-4 w-5/6 mt-6 mb-6">
          {list.map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
              className="rounded-xl group bg-black border border-white"
            >
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                isPressable
                alt={item.title}
                onPress={() => {
                  console.log("");
                }}
                className="object-cover h-[240px] w-[350px] rounded-lg relative z-11 top-0 group-hover:opacity-70 group-hover:scale-125 overflow-hidden transition duration-300"
                src={item.img}
              />
              <CardHeader className="flex flex-col absolute z-12 top-0 h-[240px] !items-center justify-center">
                <h1 className="text-white text-2xl hidden group-hover:block transition duration-300">
                  {item.title}
                </h1>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex w-full mb-10 justify-center items-center">
        <Button className="hover:bg-black" color='dark' rounded='full' variant="outlined" endIcon={<ArrowForwardIcon/>} sx={{ borderRadius: '15px', textTransform: "none", width:'20%',
          "&:hover": {
            borderColor: 'black',
            color: "white",
          }, }}>See More</Button>
      </div>
    </div>
  );
}
