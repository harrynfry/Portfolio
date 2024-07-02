'use client';
import Image from "next/image";

const PersonalBanner = () => {
  return (
    <personalbanner>
        <div className="flex flex-col items-center justify-center pt-10">
        <div className="p-4 md:p-6 lg:p-10 max-w-5xl w-full flex items-center justify-between font-mono">
            <h1 className="text-left text-5xl md:text-6xl lg:text-7xl ">
            Harry Fry
            </h1>
            <div className="lg:w-48 lg:h-48">
            <Image
                className="rounded-full aspect-square object-cover"
                src="/IMG_5973.JPG"
                alt="Image of Harry"
                width={200}
                height={200}
                priority
            />
            </div>
        </div>
        </div>
    </personalbanner>
  );
}

export default PersonalBanner;
