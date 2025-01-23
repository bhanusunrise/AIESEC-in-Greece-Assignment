import Image from "next/image";
import Button from "./components/button";
import NavBar from "./components/navbar";
import { AcademicCapIcon, CurrencyDollarIcon, FaceSmileIcon, MusicalNoteIcon, StarIcon } from "@heroicons/react/24/outline";

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

      <div className="text-center pb-40 pt-40 pl-10 pr-10 bg-white z-10">
        <p className="text-5xl font-semibold text-gray-800 text-center">Discover Australia</p>
        <p className="text-lg text-gray-400 mt-10">
          Discover Australia's beauty, opportunities, and rich multicultural heritage for travelers, investors, and international students.
        </p>

        <div className="columns-3 flex gap-4 mt-20">
          <div className="column p-4">
            <Image src="/bridge.jpg" alt="Bridge" width={500} height={500} className="rounded-3xl hover:opacity-80"/>
          </div>
          <div className="column p-4">
            <Image src="/bg.jpg" alt="Bridge" width={500} height={500} className="rounded-3xl hover:opacity-80"/>
            <Image src="/beach.jpg" alt="Bridge" width={500} height={500} className="rounded-3xl hover:opacity-80 mt-8"/>
          </div>
          <div className="column p-4">
            <Image src="/kola.jpg" alt="Bridge" width={500} height={500} className="rounded-3xl hover:opacity-80"/>
            <Image src="/bg.jpg" alt="Bridge" width={500} height={500} className="rounded-3xl hover:opacity-80 mt-8"/>
          </div>
      </div>

      </div>

      <div className="text-center pb-40 pl-10 pr-10 pt-40 z-10">
        <p className="text-5xl font-semibold text-white text-center">Why Choose Australia</p>
        <p className="text-lg text-white mt-10">Discover Australia's beauty, opportunities, and multicultural charm for everyone.</p>
<div className="grid grid-cols-3 gap-2 mt-20">
  <div className="p-4 bg-white/50 rounded-3xl hover:bg-white/80">
    <div className="flex">
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
    </div>
    <p className="text-lg text-gray-800 mt-5 font-semibold text-left">High Quality Education</p>
    <p className="text-md text-gray-600 mt-3 text-left">
      As an international student, I found endless opportunities and a welcoming environment in Australia that fostered my growth and learning.
    </p>
    <div className="flex mt-5">
      <FaceSmileIcon className="h-6 w-6 fill-orange-500 mr-2" />
      <p className="text-lg text-gray-800 font-semibold text-left">Michael Lee</p>
    </div>
  </div>

  <div className="p-4 bg-white/50 rounded-3xl hover:bg-white/80">
    <div className="flex">
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
    </div>
    <p className="text-lg text-gray-800 mt-5 font-semibold text-left">High Quality Education</p>
    <p className="text-md text-gray-600 mt-3 text-left">
      Australia's rich culture and stunning landscapes truly captivated my heart and mind.
    </p>
    <div className="flex mt-5">
      <FaceSmileIcon className="h-6 w-6 fill-orange-500 mr-2" />
      <p className="text-lg text-gray-800 font-semibold text-left">Emily Johnson</p>
    </div>
  </div>

  <div className="p-4 bg-white/50 rounded-3xl hover:bg-white/80">
    <div className="flex">
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
    </div>
    <p className="text-lg text-gray-800 mt-5 font-semibold text-left">High Quality Education</p>
    <p className="text-md text-gray-600 mt-3 text-left">
      As an international student, I found endless opportunities and a welcoming environment in Australia that fostered my growth and learning.
    </p>
    <div className="flex mt-5">
      <FaceSmileIcon className="h-6 w-6 fill-orange-500 mr-2" />
      <p className="text-lg text-gray-800 font-semibold text-left">Michael Lee</p>
    </div>
  </div>
</div>

      </div>

      
    </>
  );
}
