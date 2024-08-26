import Navbar from "./components/navbar";
import Main from "./components/main";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-home-desktop bg-no-repeat bg-center bg-cover max-xl:bg-home-tablet max-md:bg-home-mobile">
      <Navbar activeElement="home" />
      <Main />
    </div>
  );
}
