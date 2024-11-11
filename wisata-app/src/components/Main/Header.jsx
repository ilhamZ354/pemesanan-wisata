import { Image } from "@nextui-org/react";
import { ButtonSearch } from "../InputSearch/ButtonSearch";
export default function HeaderPage() {
    return (
        <div className="relative bg-black">
            <Image 
                src="/images/bali-bg.jpg"  // Pastikan path gambar benar, tanpa `/public`
                alt="Image" 
                width="100%" 
                className="h-auto object-contain opacity-70 z-9"
            />
            <div className="w-full absolute inset-0 z-10 top-1/3">
                <h2 className="text-white font-bold md:text-6xl sm:text-xl">Your best adventures friend</h2>
                <ButtonSearch/>
            </div>
        </div>
    );
}
