import Button from "./components/button";
import NavBar from "./components/navbar";

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
      
    </>
  );
}
