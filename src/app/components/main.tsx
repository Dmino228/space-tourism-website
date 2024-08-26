import { barlowCondensed, bellefair } from "@/fonts";

export default function Main() {
  return (
    <main className="h-[888px] w-full flex justify-center items-center">
      <div className="w-[1110px] h-[632px] flex items-end max-xl:w-[688px] max-xl:h-[672px] max-xl:items-center max-md:w-[327px] max-md:h-[676px]">
        <div className="w-full flex items-center max-xl:flex-col max-xl:gap-16 max-md:gap-0 max-md:h-full">
          <div className="w-1/2 flex flex-col text-figma-blue-300 max-xl:w-[512px] max-xl:items-center max-md:w-full">
            <h1
              className={`${barlowCondensed.className} text-3xl tracking-widest uppercase max-md:text-base max-md:tracking-[15%]`}
            >
              so, you want to travel to
            </h1>
            <h2
              className={`${bellefair.className} text-white text-[9rem] uppercase max-md:text-[5rem]`}
            >
              space
            </h2>
            <p className="text-lg leading-[1.8] max-xl:text-center max-md:text-base max-md:leading-[1.8]">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-end max-xl:w-[512px] max-md:w-full max-md:h-full">
            <div className="w-[540px] h-[272px] flex justify-end max-xl:justify-center max-md:items-center">
              <button className="w-[272px] h-[272px] rounded-full bg-white grid place-items-center relative z-10 hover:text-figma-hover-gray transition max-md:w-36 max-md:h-36">
                <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-10 rounded-full transition-transform duration-300 ease-in-out hover:scale-150"></div>
                <span
                  className={`${bellefair.className} text-4xl max-md:text-lg`}
                >
                  EXPLORE
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
