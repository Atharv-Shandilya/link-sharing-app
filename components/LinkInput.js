import options from "@/data/select-options";
import Select from "react-select";
import Input from "./Input";

export default function LinkInput({
  index,
  label,
  type,
  placeholder,
  register,
  errors,
  icon,
  remove,
}) {
  return (
    <section className="p-5 bg-main-bg mt-6 rounded-lg ">
      <div className="flex justify-between text-text-secondary mb-3">
        <h3 className="font-bold">Link#{index + 1}</h3>
        <p
          className="cursor-pointer"
          onClick={() => {
            remove(index);
          }}
        >
          Remove
        </p>
      </div>

      <label className="text-xs text-text-primary cursor-pointer">
        Platform
        <Select
          unstyled
          options={options}
          getOptionLabel={(e) => {
            return (
              <div className="flex items-center cursor-pointer">
                <span>{e.icon}</span>
                <p className="ml-3">{e.label}</p>
              </div>
            );
          }}
          classNames={{
            container: () => {
              return "text-base has-[:focus]:border-accent has-[:focus]:shadow-focus px-4 py-1 mt-1 border-solid border-[1px] rounded-lg bg-white";
            },
            menu: () => {
              return "bg-white px-4 left-[0px] border border-outline mt-4 rounded-lg";
            },
            option: (state) => {
              console.log(state);
              return `py-3 px-2 border-b ${
                state.isSelected ? "text-accent" : "text-text-secondary"
              }`;
            },
            valueContainer: () => {
              return "cursor-pointer";
            },

            dropdownIndicator: (state) => {
              return `${state.isFocused ? "rotate-180" : ""}`;
            },
          }}
        />
      </label>
      <div className="mt-3">
        <Input
          errors={errors}
          register={register}
          placeholder={placeholder}
          type={type}
          icon={icon}
          label={label}
        />
      </div>
    </section>
  );
}
