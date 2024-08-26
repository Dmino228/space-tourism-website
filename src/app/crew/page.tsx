import Navbar from "../components/navbar";
import Main from "./components/main";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-crew-desktop bg-no-repeat bg-center bg-cover max-xl:bg-crew-tablet max-md:bg-crew-mobile">
      <Navbar activeElement="crew" />
      <Main />
    </div>
  );
}
