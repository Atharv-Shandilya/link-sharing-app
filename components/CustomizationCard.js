import { useForm } from "react-hook-form";
import Button from "./Button";

export default function CustomizationCard({ children, title, body }) {
  const { handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <form
      className="bg-white rounded-lg flex-1 flex flex-col h-[820px] "
      onSubmit={handleSubmit(onSubmit)}
    >
      <section className="p-10">
        <h2 className=" text-3xl font-bold">{title}</h2>
        <p className="text-text-secondary mt-2">{body}</p>
        {children}
      </section>

      <section className="flex justify-end p-10 border-t border-outline mt-auto">
        <div>
          <Button>Save</Button>
        </div>
      </section>
    </form>
  );
}
