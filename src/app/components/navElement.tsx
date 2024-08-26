import Link from "next/link";

type Props = {
  number: number;
  text: string;
  link: string;
  active: boolean;
  mobile?: boolean;
};

export default function NavElement({
  active,
  mobile,
  link,
  number,
  text,
}: Props) {
  const border = mobile ? "border-r-[3px]" : "border-b-[3px]";

  return (
    <div
      className={`flex items-center h-full text-white tracking-[0.2em] border-white relative after:absolute after:right-0 after:bottom-0 md:after:w-full max-md:after:w-[3px] md:after:h-[3px] max-md:after:h-full after:bg-white after:bg-opacity-50 md:after:scale-x-0 max-md:after:scale-y-0 after:transition after:duration-300 ${
        mobile ? "" : "max-md:hidden"
      } ${
        active
          ? border
          : "md:hover:after:scale-x-100 max-md:hover:after:scale-y-100"
      }`}
    >
      <Link href={link} className="h-full flex items-center gap-3">
        <span
          className={`font-bold ${text === "home" ? "md:max-xl:hidden" : ""}`}
        >
          0{number}
        </span>{" "}
        {text.toUpperCase()}
      </Link>
    </div>
  );
}
