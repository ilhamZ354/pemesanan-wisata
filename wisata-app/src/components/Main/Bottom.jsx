import { Image, Card, CardHeader } from "@nextui-org/react";

export default function Bottom() {
    return(
        <div className="w-full mt-6">
            <Card className="w-full bg-white h-[90vh]">
                <Image
                    className="object-cover h-auto w-full bg-gradient-to-b from-transparent to-white opacity-75"
                    alt='gambar-background-bawah'
                    src='/public/images/gunung.jpg'
                />
                <CardHeader className="flex flex-col absolute z-30 top-0 w-full h-[100vh] bg-gradient-to-b from-white to-transparent">
                    <div className="w-full mt-8">
                        <p className="text-5xl font-bold text-slate-800">Let{`'`}s enjoy the paradise</p>
                        <p className="text-4xl mt-2 font-bold text-slate-600">Indonesia is Wonderfull</p>
                    </div>
                </CardHeader>
            </Card>
        </div>
    )
}