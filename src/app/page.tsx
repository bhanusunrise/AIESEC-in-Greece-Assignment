import Image from "next/image";
import Button from "./components/button";
import NavBar from "./components/navbar";
import { AcademicCapIcon, CurrencyDollarIcon, MusicalNoteIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
    <NavBar/>
    <div className="text-center min-h-screen flex flex-col justify-center items-center">
        <p className="text-7xl font-semibold text-white">Discover Australia&apos;s <br/> Opportunities and <br/> Beauty</p>
        <p className="text-lg mt-6 text-white">Explore our culture, education, and investment potential.</p>
        <div className="mt-10">
          <Button text="Learn More" bgColor="bg-green-500" hoverColor="hover:bg-green-600" focusColor="focus:ring-green-300" />
        </div>
    </div>

    <div className="columns-3 pl-40 pr-40 text-center pb-40">
          <div className="column bg-white/10 p-10 rounded-3xl hover:bg-gray-800/50">
            <p className="text-2xl font-semibold text-white">Cultural Diversity</p>
            <p className="text-lg text-white">A rich multicultural heritage and traditions.</p>
          </div>
          <div className="column bg-white/10 p-10 rounded-3xl hover:bg-gray-800/50">
            <p className="text-2xl font-semibold text-white">Investment Potential</p>
            <p className="text-lg text-white">Invest in a thriving economy with endless possibilities.</p>
          </div>
          <div className="column bg-white/10 p-10 rounded-3xl hover:bg-gray-800/50">
            <p className="text-2xl font-semibold text-white">Higher Studies</p>
            <p className="text-lg text-white">Study in world-class institutions and vibrant cities.</p>
          </div>
      </div>

      <div className="columns-3 text-center pb-40 pt-40 pl-10 pr-10 bg-white flex z-10">
        <div className="flex flex-col justify-center">
          <p className="text-5xl font-semibold text-gray-800">About Us</p>
          <p className="text-lg text-gray-400 mt-10">
            Discover Australia's beauty, opportunities, and rich multicultural heritage for travelers, investors, and international students.
          </p>
          <center>
            <Button
              text="Explore"
              bgColor="bg-green-500"
              hoverColor="hover:bg-green-600"
              focusColor="focus:ring-green-300"
              className="mt-10 w-40"
            />
          </center>
        </div>
        <div className="column p-4">
          <Image src="/kola.jpg" alt="Kola" width={500} height={500} className="rounded-3xl hover:opacity-80"/>
        </div>
        <div className="column p-4">
          <Image src="/beach.jpg" alt="Beach" width={500} height={500} className="rounded-3xl hover:opacity-80"/>
        </div>
      </div>


      <div className="text-center pb-40 pt-40 pl-10 pr-10 bg-green-100 z-10">
        <p className="text-5xl font-semibold text-gray-800">Explore Australia Today</p>
          <p className="text-lg text-gray-400 mt-10">
            Discover opportunities, beauty, and culture in Australia for travelers, investors, and students.          
          </p>
      <div className="columns-2 flex mt-20">
        <div className="column p-4">
          <Image src="/bridge.jpg" alt="Bridge" width={500} height={500} className="rounded-3xl hover:opacity-80"/>
        </div>
        <div className="flex flex-col justify-center text-left p-20">
          
          <p className="text-xl font-bold text-gray-800">
            <AcademicCapIcon className="h-6 w-6 inline mr-2"/>
            Study in Australia          
          </p>
          <p className="text-lg text-gray-400 mt-5">
            Join world-class educational institutions and embrace unique experiences in a beautiful environment.         
          </p>
          <p className="text-xl font-bold text-gray-800 mt-10">
            <MusicalNoteIcon className="h-6 w-6 inline mr-2"/>
            Cultural Diversity Awaits       
          </p>
          <p className="text-lg text-gray-400 mt-5">
            Experience Australia's rich multicultural heritage and vibrant communities welcoming all.      
          </p>
          <p className="text-xl font-bold text-gray-800 mt-10">
            <CurrencyDollarIcon className="h-6 w-6 inline mr-2"/>
            Investment Opportunities      
          </p>
          <p className="text-lg text-gray-400 mt-5">
            Unlock potential in Australia’s thriving economy and diverse sectors for investors.       
          </p>
        </div>
        
      </div>
      </div>

      
    </>
  );
}
