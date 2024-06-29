import Image from "next/image";
import Nav from "./components/Nav";

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center p-10">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-5xl lg:flex">
        <h1 >
            Harry Fry
        </h1>        
        <Image
            src="/IMG_5973.JPG"
            alt="Image of Harry"
            className="rounded-full aspect-square object-cover"
            width={300}
            height={200}
            priority
          />       
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-3xl lg:flex">
        <Nav/>
      </div>
     




    </main>
  );
}
