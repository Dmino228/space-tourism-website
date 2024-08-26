import Navbar from "../components/navbar";
import Main from "./components/main";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-technology-desktop bg-no-repeat bg-center bg-cover max-xl:bg-technology-tablet max-md:bg-technology-mobile">
      <Navbar activeElement="technology" />
      <Main />
    </div>
  );
}
