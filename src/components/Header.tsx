import Image from "next/image";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="p-5 text-white flex items-center justify-between border-b-2    w-full bg-[#101010]">
      <div>Qoute of the day generator</div>
      <div className="flex items-center">
        by Miron Grekul
        <Image width={50} height={100} src="/logo3.png" alt="" />
      </div>
    </header>
  );
};

export default Header;
