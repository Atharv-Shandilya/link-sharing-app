import Logo from "@/components/Logo";

export default function authLayout({ children }) {
  return (
    <main className="flex items-center justify-center h-screen">
      <article className=" max-w-[482px] w-full ">
        <Logo />
        <section className="bg-white p-10 w-full rounded-lg mt-10">
          {children}
        </section>
      </article>
    </main>
  );
}
