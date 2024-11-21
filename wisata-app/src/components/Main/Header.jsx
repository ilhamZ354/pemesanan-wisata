import { useCallback, useRef } from "react";
import { Image } from "@nextui-org/react";
import { ButtonSearch } from "../InputSearch/ButtonSearch";
import { Spinner } from "@nextui-org/react";
export default function HeaderPage() {
    const homeSection = useRef(null);

    const ImageLoad = useCallback(()=>{
        return (
            <Spinner/>
        )
    },[])

    return (
        <div id="home" ref={homeSection} className="home relative bg-black h-screen">
            <Image 
                src="/images/bali-icon.jpg"  // Pastikan path gambar benar, tanpa `/public`
                alt="Image" 
                fetchPriority="high"
                width="100%" 
                className="bg-header w-full h-screen object-cover opacity-70 z-9"
                onLoad={ImageLoad}
            />
            <div className="flex flex-col w-full absolute inset-0 z-10 top-0 items-center">
                <div className='flex flex-col h-full justify-center items-center'>
                    <h2 className="text-white font-bold text-xl sm:text-2xl md:text-6xl">Your best adventures friend</h2>
                    <ButtonSearch/>
                </div>
            </div>
        </div>
    );
}
