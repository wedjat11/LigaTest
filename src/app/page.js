import Carousel from "@/components/carousel/Carousel";
import { NavBarPage } from "./home/components/navBarPage";
import { HomeView } from "./home/homeView";

export default function Home() {
 
  return (
    <>
      <div className="bg-black h-4 w-full">

      </div>
      <NavBarPage/>
      <HomeView/>
      <Carousel/>
    </>
    
  );
}
