import NavElement from "./navElement";

type Props = {
  activeElement: string;
  mobile?: boolean;
};

export default function NavElements({ activeElement, mobile }: Props) {
  const options = ["home", "destination", "crew", "technology"];
  const menuItems = options.map((option, index) => (
    <NavElement
      key={index}
      number={index}
      text={option}
      link={options[index] === "home" ? "/" : options[index]}
      active={activeElement === option}
      mobile={mobile}
    />
  ));

  return menuItems;
}
