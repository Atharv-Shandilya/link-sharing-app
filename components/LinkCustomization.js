import { useFieldArray, useForm } from "react-hook-form";
import CustomizationCard from "./CustomizationCard";
import Button from "./Button";
import startedSvg from "@/public/preview/get-you-started.svg";
import Image from "next/image";
import LinkInput from "./LinkInput";
import linkSvg from "/public/preview/link.svg";
export default function LinkCustomization() {
  const {
    register,
    control,
    formState: { errors },
  } = useForm();
  const { fields, append, prepend, remove } = useFieldArray({
    control,
    name: "Socials",
  });

  return (
    <CustomizationCard
      title={"Customize your links"}
      body={
        "Add/edit/remove links below and then share all your profiles with the world!"
      }
    >
      <article className="mt-10">
        <Button
          type={"button"}
          variant={true}
          action={() => {
            if (fields.length < 5) {
              append({});
            }
          }}
        >
          + Add new link
        </Button>
        {fields.length == 0 && (
          <section className="flex flex-col items-center py-12 px-5 bg-main-bg mt-6">
            <Image src={startedSvg} />
            <h3 className="text-3xl font-bold mt-10">Let’s get you started</h3>
            <p className="text-text-secondary max-w-[448px] text-center mt-6 rounded-lg">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </section>
        )}

        {fields.length != 0 && (
          <div className="h-[480px] overflow-auto">
            {fields.map((item, index) => {
              return (
                <LinkInput
                  key={item.id}
                  index={index}
                  register={register}
                  remove={remove}
                  errors={errors}
                  label={"Link"}
                  type={"text"}
                  placeholder={"e.g. https://www.github.com/johnappleseed"}
                  icon={linkSvg}
                />
              );
            })}
          </div>
        )}
      </article>
    </CustomizationCard>
  );
}
