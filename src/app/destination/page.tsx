import Navbar from "../components/navbar";
import Main from "./components/main";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-destination-desktop bg-no-repeat bg-center bg-cover max-xl:bg-destination-tablet max-md:bg-destination-mobile">
      <Navbar activeElement="destination" />
      <Main />
    </div>
  );
}
