import logoSvg from "/public/logo.svg";
import Image from "next/image";
export default function Logo() {
  return (
    <section className="flex items-center justify-center">
      <Image src={logoSvg} />
      <h1 className=" font-bold text-4xl pl-2">devlinks</h1>
    </section>
  );
}
